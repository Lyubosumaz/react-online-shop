import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Item } from './entities/Post';
import mikroConfig from './mikro-orm.config';

const main = async () => {
    const orm = await MikroORM.init(mikroConfig);

    const post = orm.em.create(Item, { title: 'my first post' });
    await orm.em.persistAndFlush(post);
    console.log('--------------------sql 2-----------------');
    await orm.em.nativeInsert(Item, { title: 'my first post' });
};

main().catch((err) => {
    console.error(err);
});
