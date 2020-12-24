import { EntityManager, IDatabaseDriver, Connection } from '@mikro-orm/core';
import { Request, Response } from 'express';
import { Redis } from 'ioredis';

export type MyContest = {
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
    // @ts-ignore
    req: Request & { session: Express.Session };
    res: Response;
    redis: Redis;
};
