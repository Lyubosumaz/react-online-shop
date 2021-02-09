import { Box, Button, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ItemActionButtons } from '../../components/cards/item/ItemActionButtons';
import { RatingSection } from '../../components/cards/item/RatingSection';
import { useItemsQuery } from '../../generated/graphql';
import MainLayout from '../../layouts/MainLayout';
import { usePriceRound } from '../../utils/usePriceRound';
import { withApollo } from '../../utils/withApollo';

const Home = () => {
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
            {!data && loading ? (
                <div>loading...</div>
            ) : (
                <Stack spacing={8}>
                    {data?.items.items.length ? (
                        data!.items.items.map((p) =>
                            !p ? null : (
                                <Flex key={p.id} p={5} shadow="md" borderWidth="1px">
                                    <RatingSection item={p} />
                                    <Box flex={1}>
                                        <Flex>
                                            <NextLink href="/item/[id]" as={`/item/${p.id}`}>
                                                <Link flexGrow={1}>
                                                    <Heading fontSize="2xl">{p.title}</Heading>
                                                </Link>
                                            </NextLink>
                                            <Text>${usePriceRound(p.price)}</Text>
                                        </Flex>
                                        <Flex justify="space-between" mb={4}>
                                            <Text>categories: {p.category}</Text>
                                            <Text>added by {p.creator.username}</Text>
                                        </Flex>
                                        <Flex align="center">
                                            <Text flex={1} mt={4}>
                                                {p.descriptionSnippet}
                                            </Text>
                                            <Box ml="auto">
                                                <ItemActionButtons id={p.id} creatorId={p.creator.id} />
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
        </MainLayout>
    );
};

export default withApollo({ ssr: true })(Home);
