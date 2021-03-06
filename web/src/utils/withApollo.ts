import { PaginatedItems } from '@/generated/graphql';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { NextPageContext } from 'next';
import { createWithApollo } from './createWithApollo';

const createClient = (ctx: NextPageContext) =>
    new ApolloClient({
        uri: process.env.NEXT_PUBLIC_API_URL as string,
        credentials: 'include',
        headers: {
            cookie: (typeof window === 'undefined' ? ctx?.req?.headers.cookie : undefined) || '',
        },
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        items: {
                            keyArgs: [],
                            merge(existing: PaginatedItems | undefined, incoming: PaginatedItems): PaginatedItems {
                                return {
                                    ...incoming,
                                    items: [...(existing?.items || []), ...incoming.items],
                                };
                            },
                        },
                    },
                },
            },
        }),
    });

export const withApollo = createWithApollo(createClient);
