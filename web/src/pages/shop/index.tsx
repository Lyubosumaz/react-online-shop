import Product from "@/components/cards/Product";
import { useItemsQuery } from '@/generated/graphql';
import MainLayout from '@/layouts/MainLayout';
import { withApollo } from '@/utils/withApollo';
import { Box, Button, Flex, Link, List, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from "react";

const Shop = () => {
    const { data, error, loading, fetchMore, variables } = useItemsQuery({
        variables: {
            limit: 15,
            cursor: null,
        },
        notifyOnNetworkStatusChange: true,
    });

    if (!loading && !data) {
        return (
            <div>
                <div>you got query failed for some reason</div>
                <div>{error?.message}</div>
            </div>
        );
    }

    return (
        <MainLayout>
            {!data && loading
                ? <Text>loading...</Text>
                :
                <List
                    d="flex"
                    justifyContent="space-evenly"
                >
                    {data?.items.items.length
                        ? data!.items.items.map((p) => !p
                            ? null
                            : <Product data={p} />)
                        :
                        <Flex alignItems="center">
                            <Box mr={5}>Nothing was created so far!</Box>
                            <NextLink href="/create-item">
                                <Button as={Link} mr={4}>create item</Button>
                            </NextLink>
                        </Flex>
                    }
                </List>
            }
            {data && data.items.hasMore
                ?
                <Flex>
                    <Button
                        onClick={() => {
                            fetchMore({
                                variables: {
                                    limit: variables?.limit,
                                    cursor: data.items.items[data.items.items.length - 1].createdAt,
                                },
                                // updateQuery: (
                                //   previousValue,
                                //   { fetchMoreResult }
                                // ): ItemsQuery => {
                                //   if (!fetchMoreResult) {
                                //     return previousValue as ItemsQuery;
                                //   }

                                //   return {
                                //     __typename: "Query",
                                //     items: {
                                //       __typename: "PaginatedItems",
                                //       hasMore: (fetchMoreResult as ItemsQuery).items.hasMore,
                                //       items: [
                                //         ...(previousValue as ItemsQuery).items.items,
                                //         ...(fetchMoreResult as ItemsQuery).items.items,
                                //       ],
                                //     },
                                //   };
                                // },
                            });
                        }}
                        isLoading={loading}
                        m="auto"
                        my={8}
                    >load more</Button>
                </Flex>
                : null
            }
        </MainLayout>
    );
};

export default withApollo({ ssr: true })(Shop);
