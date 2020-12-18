import 'reflect-metadata';
import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
// import { Items } from './entities/Items';
import mikroConfig from './mikro-orm.config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';
import { ItemsResolver } from './resolvers/items';

const main = async () => {
    const orm = await MikroORM.init(mikroConfig);
    await orm.getMigrator().up();

    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, ItemsResolver],
            validate: false,
        }),
        context: () => ({ em: orm.em }),
    });

    apolloServer.applyMiddleware({ app });

    app.get('/', (_, res) => {
        res.send('hello');
    });

    app.listen(4000, () => {
        console.log('server started on localhost:4000');
    });

    // const post = orm.em.create(Items, { title: 'my first post' });
    // await orm.em.persistAndFlush(post);
    // console.log('--------------------sql 2-----------------');
    // await orm.em.nativeInsert(Item, { title: 'my first post' });

    // const items = await orm.em.find(Items, {});
    // console.log(items);
};

main().catch((err) => {
    console.error(err);
});
