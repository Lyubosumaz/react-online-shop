import { User } from '../entities/User';
import { MyContest } from '../types';
import { Arg, Ctx, Field, Mutation, ObjectType, Query, Resolver } from 'type-graphql';
import argon2 from 'argon2';
import { EntityManager } from '@mikro-orm/postgresql';
import { COOKIE_NAME, FORGOTTEN_PASSWORD_PREFIX } from '../constants';
import { UsernamePasswordInput } from './UsernamePasswordInput';
import { validateRegister } from '../utils/validateRegister';
import { sendEmail } from '../utils/sendEmail';
import { v4 } from 'uuid';

@ObjectType()
class FieldError {
    @Field()
    field: string;
    @Field()
    message: string;
}

@ObjectType()
class UserResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field(() => User, { nullable: true })
    user?: User;
}

@Resolver()
export class UserResolver {
    @Mutation(() => UserResponse)
    async changePassword(@Arg('token') token: string, @Arg('newPassword') newPassword: string, @Ctx() { em, req, redis }: MyContest): Promise<UserResponse> {
        if (newPassword.length <= 2) {
            return {
                errors: [
                    {
                        field: `newPassword`,
                        message: `length must be greater then 2`,
                    },
                ],
            };
        }

        const userId = await redis.get(FORGOTTEN_PASSWORD_PREFIX + token);

        if (!userId) {
            return {
                errors: [
                    {
                        field: `token`,
                        message: `token expired`,
                    },
                ],
            };
        }

        const user = await em.findOne(User, { id: parseInt(userId) });

        if (!user) {
            return {
                errors: [
                    {
                        field: `token`,
                        message: `user no longer exists`,
                    },
                ],
            };
        }

        user.password = await argon2.hash(newPassword);
        await em.persistAndFlush(user);

        // log in user after change password
        req.session = user.id;

        return { user };
    }

    @Mutation(() => Boolean)
    async forgottenPassword(@Arg('email') email: string, @Ctx() { em, redis }: MyContest) {
        console.log(email);
        const user = await em.findOne(User, { email });
        console.log(user);
        if (!user) {
            // email is not in the db
            return true;
        }

        const token = v4();

        await redis.set(FORGOTTEN_PASSWORD_PREFIX + token, user.id, 'ex', 1000 * 60 * 60 * 24 * 3); // 3 days

        await sendEmail(email, `<a href="http://localhost:3000/change-password/${token}">reset password</a>`);

        return true;
    }

    @Query(() => User, { nullable: true })
    async me(@Ctx() { em, req }: MyContest): Promise<User | null> {
        // you are not logged
        if (!req.session.userId) {
            return null;
        }

        const user = await em.findOne(User, { id: req.session.userId });
        return user;
    }

    @Mutation(() => UserResponse)
    async register(@Arg('options', () => UsernamePasswordInput) options: UsernamePasswordInput, @Ctx() { em, req }: MyContest): Promise<UserResponse> {
        const errors = validateRegister(options);
        if (errors) {
            return { errors };
        }

        const hashedPassword = await argon2.hash(options.password);
        let user;
        try {
            const result = await (em as EntityManager)
                .createQueryBuilder(User)
                .getKnexQuery()
                .insert({
                    username: options.username,
                    email: options.email,
                    password: hashedPassword,
                    created_at: new Date(),
                    updated_at: new Date(),
                })
                .returning('*');
            user = result[0];
        } catch (err) {
            // duplicate username error
            // if (err.detail.include('already exists')) {
            if (err.code === '23505') {
                return {
                    errors: [
                        {
                            field: 'username',
                            message: 'username already taken',
                        },
                    ],
                };
            }
        }

        // log in with newly created user
        req.session.userId = user.id;

        return {
            user,
        };
    }

    @Mutation(() => UserResponse)
    async login(@Arg('usernameOrEmail') usernameOrEmail: string, @Arg('password') password: string, @Ctx() { em, req }: MyContest): Promise<UserResponse> {
        const user = await em.findOne(User, usernameOrEmail.includes('@') ? { email: usernameOrEmail } : { username: usernameOrEmail });
        if (!user) {
            return {
                errors: [
                    {
                        field: `usernameOrEmail`,
                        message: `invalid username or email`,
                    },
                ],
            };
        }

        const valid = await argon2.verify(user.password, password);
        if (!valid) {
            return {
                errors: [
                    {
                        field: `password`,
                        message: `incorrect password`,
                    },
                ],
            };
        }

        req.session.userId = user.id;

        return {
            user,
        };
    }

    @Mutation(() => Boolean)
    logout(@Ctx() { req, res }: MyContest) {
        return new Promise((resolve) =>
            req.session.destroy((err: any) => {
                if (err) {
                    console.log(err);
                    resolve(false);
                    return;
                }

                res.clearCookie(COOKIE_NAME);
                resolve(true);
            })
        );
    }
}