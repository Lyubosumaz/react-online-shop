import { Box, Button, Flex, Heading, Link, Stack, Text } from '@chakra-ui/core';
import NextLink from 'next/link';
import { EditDeleteItemButtons } from '../components/EditDeleteItemButtons';
import { Layout } from '../components/Layout';
import { UpdootSection } from '../components/UpdootSection';
import { useItemsQuery } from '../generated/graphql';
import { withApollo } from '../utils/withApollo';

const Index = () => {
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
        <Layout>
            {!data && loading ? (
                <div>loading...</div>
            ) : (
                <Stack spacing={8}>
                    {data?.items.items.length ? (
                        data!.items.items.map((p) =>
                            !p ? null : (
                                <Flex key={p.id} p={5} shadow="md" borderWidth="1px">
                                    <UpdootSection item={p} />
                                    <Box flex={1}>
                                        <NextLink href="/item/[id]" as={`/item/${p.id}`}>
                                            <Link>
                                                <Heading fontSize="xl">{p.title}</Heading>
                                            </Link>
                                        </NextLink>
                                        <Text>posted by {p.creator.username}</Text>
                                        <Flex align="center">
                                            <Text flex={1} mt={4}>
                                                {p.descriptionSnippet}
                                            </Text>
                                            <Box ml="auto">
                                                <EditDeleteItemButtons id={p.id} creatorId={p.creator.id} />
                                            </Box>
                                        </Flex>
                                    </Box>
                                </Flex>
                            )
                        )
                    ) : (
                        <Flex alignItems="center">
                            <Box mr={5}>Nothing was created so far!</Box>
                            <NextLink href="/create-item">
                                <Button as={Link} mr={4}>
                                    create item
                                </Button>
                            </NextLink>
                        </Flex>
                    )}
                </Stack>
            )}
            {data && data.items.hasMore ? (
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
                    >
                        load more
                    </Button>
                </Flex>
            ) : null}
        </Layout>
    );
};

export default withApollo({ ssr: true })(Index);
