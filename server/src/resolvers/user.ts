import argon2 from 'argon2';
import { Arg, Ctx, Field, FieldResolver, Int, Mutation, ObjectType, Query, Resolver, Root } from 'type-graphql';
import { getConnection } from 'typeorm';
import { v4 } from 'uuid';
import { CONFIRM_EMAIL_PREFIX, COOKIE_NAME, FORGOTTEN_PASSWORD_PREFIX } from '../constants';
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

        await sendEmail(email, `<a href="${process.env.CORS_ORIGIN}/user/change-password/${token}">reset password</a>`);

        return true;
    }

    @Mutation(() => UserResponse)
    async confirmEmailAccept(
        @Arg('token')
        token: string,
        @Ctx()
        { redis }: MyContext
    ): Promise<UserResponse> {
        const key = CONFIRM_EMAIL_PREFIX + token;

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

        // emailStatus: 1 confirmed/verified email
        await User.update({ id: userIdNum }, { emailStatus: 1 });

        await redis.del(key);

        return { user };
    }

    @Mutation(() => Boolean)
    async confirmEmailMessage(
        @Arg('email')
        email: string,
        @Ctx()
        { redis }: MyContext
    ) {
        if (email === '-1') return true;

        const user = await User.findOne({ where: { email } });
        // the email is not in the db
        if (!user) return true;

        const token = v4();

        await redis.set(CONFIRM_EMAIL_PREFIX + token, user.id, 'ex', 1000 * 60 * 60 * 24 * 3); // 3 days

        await sendEmail(email, `<a href="${process.env.CORS_ORIGIN}/user/confirm-email/${token}">confirm email</a>`);

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

    @Mutation(() => UserResponse)
    async deleteAccount(
        @Arg('email')
        email: string,
        @Arg('password')
        password: string,
        @Arg('loggedUser', () => Int)
        loggedUser: number,
        @Ctx()
        { req, res }: MyContext
    ): Promise<UserResponse | boolean> {
        // logged user id not present
        if (loggedUser === -1) {
            return {
                errors: [
                    {
                        field: 'email',
                        message: "have problem, couldn't delete the account",
                    },
                ],
            };
        }

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return {
                errors: [
                    {
                        field: 'email',
                        message: 'is not existent',
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
                        message: 'is incorrect',
                    },
                ],
            };
        }

        const userId = req.session.userId;
        // your are logged in with same account
        // account exist in the db
        if (userId === user.id && userId === loggedUser) {
            await User.delete({ id: user.id });

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

        return true;
    }

    @Mutation(() => UserResponse)
    async changeEmail(
        @Arg('oldEmail')
        oldEmail: string,
        @Arg('newEmail')
        newEmail: string,
        @Arg('password')
        password: string,
        @Arg('loggedUser', () => Int)
        loggedUser: number,
        @Ctx()
        { req }: MyContext
    ): Promise<UserResponse> {
        // logged user id not present
        if (loggedUser === -1) {
            return {
                errors: [
                    {
                        field: 'oldEmail',
                        message: "have problem, couldn't change email",
                    },
                ],
            };
        }

        let user = await User.findOne({ where: { email: oldEmail } });
        if (!user) {
            return {
                errors: [
                    {
                        field: 'oldEmail',
                        message: 'does not existent',
                    },
                ],
            };
        }

        const checkForExistingEmail = await User.findOne({ where: { email: newEmail } });
        if (checkForExistingEmail) {
            return {
                errors: [
                    {
                        field: 'newEmail',
                        message: 'already existent',
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
                        message: 'is incorrect',
                    },
                ],
            };
        }

        const userId = req.session.userId;
        // your are logged in with same account
        // account exist in the db
        // emailStatus: -1 user email is present
        if (userId === user.id && userId === loggedUser) {
            await User.update({ id: user.id }, { email: newEmail, emailStatus: -1 });
            user = await User.findOne({ id: user.id });
        }

        return { user };
    }

    @Mutation(() => UserResponse)
    async changeUsername(
        @Arg('oldUsername')
        oldUsername: string,
        @Arg('newUsername')
        newUsername: string,
        @Arg('password')
        password: string,
        @Arg('loggedUser', () => Int)
        loggedUser: number,
        @Ctx()
        { req }: MyContext
    ): Promise<UserResponse> {
        // logged user id not present
        if (loggedUser === -1) {
            return {
                errors: [
                    {
                        field: 'oldUsername',
                        message: "have problem, couldn't change username",
                    },
                ],
            };
        }

        let user = await User.findOne({ where: { username: oldUsername } });
        if (!user) {
            return {
                errors: [
                    {
                        field: 'oldUsername',
                        message: 'does not existent',
                    },
                ],
            };
        }

        const checkForExistingUsername = await User.findOne({ where: { username: newUsername } });
        if (checkForExistingUsername) {
            return {
                errors: [
                    {
                        field: 'newUsername',
                        message: 'already existent',
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
                        message: 'is incorrect',
                    },
                ],
            };
        }

        const userId = req.session.userId;
        // your are logged in with same account
        // account exist in the db
        if (userId === user.id && userId === loggedUser) {
            await User.update({ id: user.id }, { username: newUsername });
            user = await User.findOne({ id: user.id });
        }

        return { user };
    }

    @Mutation(() => UserResponse || Boolean)
    async subscribeNewsletter(
        @Arg('email')
        email: string,
        @Ctx()
        { req }: MyContext
    ): Promise<UserResponse | boolean> {
        console.log(email)
        if (!email) return true;

        const user = await User.findOne({ where: { email } });
        // the email is not in the db
        if (!user) return true;

        const userId = req.session.userId;
        if (user.id === userId) {
            await User.update({ id: user.id }, { newsletterSub: 1 });
        }

        return { user };
    }

    @Mutation(() => UserResponse || Boolean)
    async unsubscribeNewsletter(
        @Arg('email')
        email: string,
        @Ctx()
        { req }: MyContext
    ): Promise<UserResponse | boolean> {
        console.log(email)
        if (!email) return true;

        const user = await User.findOne({ where: { email } });
        // the email is not in the db
        if (!user) return true;

        const userId = req.session.userId;
        if (user.id === userId) {
            await User.update({ id: user.id }, { newsletterSub: -1 });
        }

        return { user };
    }
}
