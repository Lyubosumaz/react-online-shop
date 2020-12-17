import { __prod__ } from './constants';
import { Item } from './entities/Item';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';

export default {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Item],
    dbName: 'test',
    user: 'root',
    password: 'root',
    type: 'postgresql',
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
// } as Options<IDatabaseDriver>;
