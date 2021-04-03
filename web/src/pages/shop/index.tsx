import Product from "@/components/cards/Product";
import { useItemsQuery } from '@/generated/graphql';
import MainLayout from '@/layouts/MainLayout';
import { withApollo } from '@/utils/withApollo';
import { Box, Button, Flex, Link, List, ListItem, Text } from '@chakra-ui/react';
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
    const gridWidth = ["48%", "32%"];
    const gridHeight = ["2%", "1%"];

    if (!loading && !data) {
        return (
            <Box>
                <Text>you got query failed for some reason</Text>
                <Text>{error?.message}</Text>
            </Box>
        );
    }

    return (
        <MainLayout>
            {!data && loading
                ? <Text>loading...</Text>
                :
                <List
                    px={6}
                    py={3}
                    d="flex"
                    flexWrap="wrap"
                    justifyContent="space-between"
                    _before={{
                        w: gridWidth,
                        content: '""',
                        order: "999",
                    }}
                    _after={{
                        w: gridWidth,
                        content: '""',
                    }}
                >
                    {data?.items.items.length
                        ? data!.items.items.map((p) => !p
                            ? null
                            :
                            <ListItem
                                key={p.id}
                                w={gridWidth}
                                my={gridHeight}
                                p={5}
                                shadow="md"
                                border="0.1rem solid"
                                borderColor="primaryL.600"
                            >
                                <Product data={p} />
                            </ListItem>)
                        :
                        <ListItem d="flex" alignItems="center">
                            <Box mr={5}>Nothing was created so far!</Box>
                            <NextLink href="/create-item">
                                <Button as={Link} mr={4}>create item</Button>
                            </NextLink>
                        </ListItem>
                    }
                </List>
            }
            {data && data.items.hasMore
                ?
                <Flex justify="center">
                    <Button
                        onClick={() => {
                            fetchMore({
                                variables: {
                                    limit: variables?.limit,
                                    cursor: data.items.items[data.items.items.length - 1].createdAt,
                                },
                            });
                        }}
                        isLoading={loading}
                        my={8}
                    >load more</Button>
                </Flex>
                : null
            }
        </MainLayout>
    );
};

export default withApollo({ ssr: true })(Shop);
