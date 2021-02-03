import { Cache, QueryInput } from '@urql/exchange-graphcache';

export function betterUpdateQuery<Result, Query>(cache: Cache, qi: QueryInput, results: any, fn: (r: Result, q: Query) => Query) {
    return cache.updateQuery(qi, (data) => fn(results, data as any) as any);
}
