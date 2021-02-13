import argon2 from 'argon2';
import { Arg, Ctx, Field, FieldResolver, Int, Mutation, ObjectType, Query, Resolver, Root } from 'type-graphql';
import { getConnection } from 'typeorm';
import { v4 } from 'uuid';
import { COOKIE_NAME, FORGOTTEN_PASSWORD_PREFIX } from '../constants';
import { User } from '../entities/User';
import { MyContext } from '../types';
import { sendEmail } from '../utils/sendEmail';
import { validateRegister } from '../utils/validateRegister';
import { UsernamePasswordInput } from './UsernamePasswordInput';

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

@Resolver(User)
export class UserResolver {
    @FieldResolver(() => String)
    email(
        @Root()
        user: User,
        @Ctx()
        { req }: MyContext
    ) {
        // this is the current user and its ok to show them their own email
        if (req.session.userId === user.id) return user.email;
        // current user wants to see someone elses email
        return '';
    }

    @Mutation(() => UserResponse)
    async changePassword(
        @Arg('token')
        token: string,
        @Arg('newPassword')
        newPassword: string,
        @Ctx()
        { redis, req }: MyContext
    ): Promise<UserResponse> {
        if (newPassword.length <= 2) {
            return {
                errors: [
                    {
                        field: 'newPassword',
                        message: 'length must be greater than 2',
                    },
                ],
            };
        }

        const key = FORGOTTEN_PASSWORD_PREFIX + token;
        const userId = await redis.get(key);
        if (!userId) {
            return {
                errors: [
                    {
                        field: 'token',
                        message: 'token expired',
                    },
                ],
            };
        }

        const userIdNum = parseInt(userId);
        const user = await User.findOne(userIdNum);

        if (!user) {
            return {
                errors: [
                    {
                        field: 'token',
                        message: 'user no longer exists',
                    },
                ],
            };
        }

        await User.update({ id: userIdNum }, { password: await argon2.hash(newPassword) });

        await redis.del(key);

        // log in user after change password
        req.session.userId = user.id;

        return { user };
    }

    @Mutation(() => Boolean)
    async forgottenPassword(
        @Arg('email')
        email: string,
        @Ctx()
        { redis }: MyContext
    ) {
        const user = await User.findOne({ where: { email } });
        // the email is not in the db
        if (!user) return true;

        const token = v4();

        await redis.set(FORGOTTEN_PASSWORD_PREFIX + token, user.id, 'ex', 1000 * 60 * 60 * 24 * 3); // 3 days

        await sendEmail(email, `<a href="${process.env.CORS_ORIGIN}/change-password/${token}">reset password</a>`);

        return true;
    }

    @Query(() => User, { nullable: true })
    me(
        @Ctx()
        { req }: MyContext
    ) {
        // you are not logged in
        if (!req.session.userId) return null;

        return User.findOne(req.session.userId);
    }

    @Mutation(() => UserResponse)
    async register(
        @Arg('options')
        options: UsernamePasswordInput,
        @Ctx()
        { req }: MyContext
    ): Promise<UserResponse> {
        const errors = validateRegister(options);
        if (errors) return { errors };

        const hashedPassword = await argon2.hash(options.password);
        let user;
        try {
            // User.create({}).save()
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(User)
                .values({
                    username: options.username,
                    email: options.email,
                    password: hashedPassword,
                })
                .returning('*')
                .execute();
            user = result.raw[0];
        } catch (err) {
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

        // store user id session
        // this will set a cookie on the user
        // keep them logged in
        req.session.userId = user.id;

        return { user };
    }

    @Mutation(() => UserResponse)
    async login(
        @Arg('usernameOrEmail')
        usernameOrEmail: string,
        @Arg('password')
        password: string,
        @Ctx()
        { req }: MyContext
    ): Promise<UserResponse> {
        const user = await User.findOne(usernameOrEmail.includes('@') ? { where: { email: usernameOrEmail } } : { where: { username: usernameOrEmail } });
        if (!user) {
            return {
                errors: [
                    {
                        field: 'usernameOrEmail',
                        message: "that username doesn't exist",
                    },
                ],
            };
        }
        const valid = await argon2.verify(user.password, password);
        if (!valid) {
            return {
                errors: [
                    {
                        field: 'password',
                        message: 'incorrect password',
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
    logout(
        @Ctx()
        { req, res }: MyContext
    ) {
        return new Promise((resolve) =>
            req.session.destroy((err: any) => {
                res.clearCookie(COOKIE_NAME);

                if (err) {
                    console.warn(err);
                    resolve(false);
                    return;
                }

                resolve(true);
            })
        );
    }

    @Mutation(() => Boolean)
    async deleteUser(
        @Arg('email')
        email: string,
        @Arg('loggedUser', () => Int)
        loggedUser: number,
        @Ctx()
        { redis }: MyContext
    ) {
        // not present user id on the request
        if (loggedUser === -1)
            return {
                errors: [
                    {
                        field: 'email',
                        message: "there was problem, couldn't delete the account",
                    },
                ],
            };

        const user = await User.findOne({ where: { email } });
        // the email is not in the db
        if (!user) return true;
        console.log(user, loggedUser);

        // const token = v4();

        // await redis.set(FORGOTTEN_PASSWORD_PREFIX + token, user.id, 'ex', 1000 * 60 * 60 * 24 * 3); // 3 days

        // await sendEmail(email, `<a href="${process.env.CORS_ORIGIN}/change-password/${token}">reset password</a>`);

        return true;
    }
}
