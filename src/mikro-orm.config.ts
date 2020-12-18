import { __prod__ } from './constants';
import { Items } from './entities/Items';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { User } from './entities/User';

export default {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Items, User],
    dbName: 'test',
    user: 'root',
    password: 'root',
    type: 'postgresql',
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
// } as Options<IDatabaseDriver>;
