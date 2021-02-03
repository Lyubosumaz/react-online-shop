import { cacheExchange, Resolver } from '@urql/exchange-graphcache';
import gql from 'graphql-tag';
import 'isomorphic-unfetch';
import Router from 'next/router';
import { dedupExchange, Exchange, fetchExchange, stringifyVariables } from 'urql';
import { pipe, tap } from 'wonka';
import { LoginMutation, LogoutMutation, MeDocument, MeQuery, RateMutationVariables, RegisterMutation } from '../generated/graphql';
import { betterUpdateQuery } from './betterUpdateQuery';
import { isServer } from './isServer';

const errorExchange: Exchange = ({ forward }) => (ops$) => {
    return pipe(
        forward(ops$),
        tap(({ error }) => {
            if (error) {
                if (error?.message.includes('not authenticated')) {
                    Router.replace('/login');
                }
            }
        })
    );
};
const cursorPagination = (): Resolver => {
    return (_parent, fieldArgs, cache, info) => {
        const { parentKey: entityKey, fieldName } = info;
        const allFields = cache.inspectFields(entityKey);
        const fieldInfos = allFields.filter((info) => info.fieldName === fieldName);
        const size = fieldInfos.length;
        if (size === 0) {
            return undefined;
        }

        const fieldKey = `${fieldName}(${stringifyVariables(fieldArgs)})`;
        const isItInTheCache = cache.resolve(cache.resolve(entityKey, fieldKey) as string, 'items');
        info.partial = !isItInTheCache;
        let hasMore = true;
        const results: string[] = [];
        fieldInfos.forEach((fi) => {
            const key = cache.resolve(entityKey, fi.fieldKey) as string;
            const data = cache.resolve(key, 'items') as string[];
            const _hasMore = cache.resolve(key, 'hasMore');
            if (!_hasMore) {
                hasMore = _hasMore as boolean;
            }
            results.push(...data);
        });

        return {
            __typename: 'PaginationItems',
            hasMore: true,
            items: results,
        };
    };
};

export const createUrqlClient = (ssrExchange: any, ctx: any) => {
    let cookie = '';
    if (isServer()) {
        cookie = ctx?.req?.headers.cookie;
    }

    return {
        url: 'http://localhost:4000/graphql',
        fetchOptions: {
            credentials: 'include' as const,
            headers: cookie ? { cookie } : undefined,
        },
        exchanges: [
            dedupExchange,
            cacheExchange({
                keys: {
                    PaginationItems: () => null,
                },
                resolvers: {
                    Query: {
                        post: cursorPagination(),
                    },
                },
                updates: {
                    Mutation: {
                        rate: (_result, args, cache, info) => {
                            const { itemId, value } = args as RateMutationVariables;
                            const data = cache.readFragment(
                                gql`
                                    fragment _ on Item {
                                        id
                                        rating
                                    }
                                `,
                                { id: itemId } as any
                            );

                            if (data) {
                                const newRating = (data.rating as number) + value;

                                cache.writeFragment(
                                    gql`
                                        fragment __ on Item {
                                            rating
                                        }
                                    `,
                                    { id: itemId, rating: newRating }
                                );
                            }
                        },
                        createItem: (_result, args, cache, info) => {
                            console.log('||||||||||||||||||||||||');
                            const allFields = cache.inspectFields('Query');
                            const fieldInfos = allFields.filter((info) => info.fieldName === 'items');
                            fieldInfos.forEach((fi) => {
                                cache.invalidate('Query', 'items', fi.arguments || {});
                            });
                        },
                        logout: (_result, args, cache, info) => {
                            betterUpdateQuery<LogoutMutation, MeQuery>(cache, { query: MeDocument }, _result, () => ({ me: null }));
                        },
                        login: (_result, args, cache, info) => {
                            betterUpdateQuery<LoginMutation, MeQuery>(cache, { query: MeDocument }, _result, (result, query) => {
                                if (result.login.errors) {
                                    return query;
                                } else {
                                    return {
                                        me: result.login.user,
                                    };
                                }
                            });
                        },
                        register: (_result, args, cache, info) => {
                            betterUpdateQuery<RegisterMutation, MeQuery>(cache, { query: MeDocument }, _result, (result, query) => {
                                if (result.register.errors) {
                                    return query;
                                } else {
                                    return {
                                        me: result.register.user,
                                    };
                                }
                            });
                        },
                    },
                },
            }),
            errorExchange,
            ssrExchange,
            fetchExchange,
        ],
    };
};
