import { usePriceRound } from '@/utils/usePriceRound';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { ItemActionButtons } from '../cards/item/ItemActionButtons';
import { RatingSection } from '../cards/item/RatingSection';

const Product: React.FC<{ p: any }> = ({ p }) => {
    return (
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
    );
};

export default Product;
