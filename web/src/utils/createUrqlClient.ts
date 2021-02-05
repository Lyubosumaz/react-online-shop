import { Cache, cacheExchange, Resolver } from '@urql/exchange-graphcache';
import gql from 'graphql-tag';
import Router from 'next/router';
import { dedupExchange, Exchange, fetchExchange, stringifyVariables } from 'urql';
import { pipe, tap } from 'wonka';
import { DeleteItemMutationVariables, LoginMutation, LogoutMutation, MeDocument, MeQuery, RegisterMutation, VoteMutationVariables } from '../generated/graphql';
import { betterUpdateQuery } from './betterUpdateQuery';
import { isServer } from './isServer';

const errorExchange: Exchange = ({ forward }) => (ops$) => {
    return pipe(
        forward(ops$),
        tap(({ error }) => {
            if (error?.message.includes('not authenticated')) {
                Router.replace('/login');
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
            __typename: 'PaginatedItems',
            hasMore,
            items: results,
        };
    };
};

const invalidateAllItems = (cache: Cache) => {
    const allFields = cache.inspectFields('Query');
    const fieldInfos = allFields.filter((info) => info.fieldName === 'items');
    fieldInfos.forEach((fi) => {
        cache.invalidate('Query', 'items', fi.arguments || {});
    });
};

export const createUrqlClient = (ssrExchange: any, ctx: any) => {
    let cookie = '';
    if (isServer()) {
        cookie = ctx?.req?.headers?.cookie;
    }

    return {
        url: process.env.NEXT_PUBLIC_API_URL as string,
        fetchOptions: {
            credentials: 'include' as const,
            headers: cookie
                ? {
                      cookie,
                  }
                : undefined,
        },
        exchanges: [
            dedupExchange,
            cacheExchange({
                keys: {
                    PaginatedItems: () => null,
                },
                resolvers: {
                    Query: {
                        items: cursorPagination(),
                    },
                },
                updates: {
                    Mutation: {
                        deleteItem: (_result, args, cache, info) => {
                            cache.invalidate({
                                __typename: 'Item',
                                id: (args as DeleteItemMutationVariables).id,
                            });
                        },
                        vote: (_result, args, cache, info) => {
                            const { postId, value } = args as VoteMutationVariables;
                            const data = cache.readFragment(
                                gql`
                                    fragment _ on Item {
                                        id
                                        rating
                                        voteStatus
                                    }
                                `,
                                { id: postId } as any
                            );

                            if (data) {
                                if (data.voteStatus === value) {
                                    return;
                                }
                                const newPoints = (data.rating as number) + (!data.voteStatus ? 1 : 2) * value;
                                cache.writeFragment(
                                    gql`
                                        fragment __ on Item {
                                            rating
                                            voteStatus
                                        }
                                    `,
                                    { id: postId, rating: newPoints, voteStatus: value } as any
                                );
                            }
                        },
                        createItem: (_result, args, cache, info) => {
                            invalidateAllItems(cache);
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
                            invalidateAllItems(cache);
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
