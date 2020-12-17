"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
exports.default = {
    migrations: {
        path: './migrations',
        pattern: /^[\w-]+\d+\.ts$/,
    },
    entities: [Post_1.Item],
    dbName: 'test',
    user: 'root',
    password: 'root',
    type: 'postgresql',
    debug: !constants_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map