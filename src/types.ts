import { EntityManager, IDatabaseDriver, Connection } from '@mikro-orm/core';

export type MyContest = {
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
};
