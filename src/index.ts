import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Item } from './entities/Item';
import mikroConfig from './mikro-orm.config';

const main = async () => {
    const orm = await MikroORM.init(mikroConfig);
    await orm.getMigrator().up();
    const post = orm.em.create(Item, { title: 'my first post' });
    await orm.em.persistAndFlush(post);
    // console.log('--------------------sql 2-----------------');
    // await orm.em.nativeInsert(Item, { title: 'my first post' });

    const items = await orm.em.find(Item, {});
    console.log(items);
};

main().catch((err) => {
    console.error(err);
});
