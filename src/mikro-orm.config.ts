import { __prod__ } from './constants';
import { Item } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';

export default {
    migrations: {
        path: './migrations', // path to the folder with migrations
        pattern: /^[\w-]+\d+\.ts$/, // regex pattern for the migration files
    },
    entities: [Item],
    dbName: 'test',
    user: 'root',
    password: 'root',
    type: 'postgresql',
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
// } as Options<IDatabaseDriver>;
