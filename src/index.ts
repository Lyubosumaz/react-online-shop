import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
// import { Item } from './entities/Item';
import mikroConfig from './mikro-orm.config';
import express from 'express';

const main = async () => {
    const orm = await MikroORM.init(mikroConfig);
    await orm.getMigrator().up();

    const app = express();
    app.get('/', (_, res) => {
        res.send('hello');
    });
    app.listen(4000, () => {
        console.log('server started on localhost:4000');
    });
    // const post = orm.em.create(Item, { title: 'my first post' });
    // await orm.em.persistAndFlush(post);
    // console.log('--------------------sql 2-----------------');
    // await orm.em.nativeInsert(Item, { title: 'my first post' });

    // const items = await orm.em.find(Item, {});
    // console.log(items);
};

main().catch((err) => {
    console.error(err);
});
