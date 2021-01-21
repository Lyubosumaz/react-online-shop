import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import corn from 'cors';
import express from 'express';
import session from 'express-session';
import Redis from 'ioredis';
import path from 'path';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { COOKIE_NAME, __prod__ } from './constants';
import { Item } from './entities/Item';
import { Stars } from './entities/Stars';
import { User } from './entities/User';
import { HelloResolver } from './resolvers/hello';
import { ItemResolver } from './resolvers/item';
import { UserResolver } from './resolvers/user';
import { MyContext } from './types';

const main = async () => {
    const conn = await createConnection({
        type: 'postgres',
        database: 'react_online_shop',
        username: 'root',
        password: 'root',
        logging: true,
        synchronize: true,
        migrations: [path.join(__dirname, './migrations/*')],
        entities: [Item, User, Stars],
    });

    await conn.runMigrations();

    // await Items.delete({});

    const app = express();

    const RedisStore = connectRedis(session);
    const redis = new Redis();

    app.use(
        corn({
            origin: 'http://localhost:3000',
            credentials: true,
        })
    );

    app.use(
        session({
            name: COOKIE_NAME,
            store: new RedisStore({
                client: redis,
                disableTouch: true,
            }),
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
                httpOnly: true,
                sameSite: 'lax', // csrf
                secure: __prod__, // cookie only works in https
            },
            saveUninitialized: false,
            secret: 'qdsfsdfwefwververergerwerwewefwe',
            resave: true,
        })
    );

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, ItemResolver, UserResolver],
            validate: false,
        }),
        context: ({ req, res }): MyContext => ({ req, res, redis }),
    });

    apolloServer.applyMiddleware({
        app,
        cors: false,
    });

    app.get('/', (_, res) => {
        res.send('hello');
    });

    app.listen(4000, () => {
        console.log('server started on localhost:4000');
    });
};

main().catch((err) => {
    console.error(err);
});
