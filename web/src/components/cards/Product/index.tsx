import { ItemActionButtons } from '@/components/cards/item/ItemActionButtons';
import { RatingSection } from '@/components/cards/item/RatingSection';
import { ItemSnippetFragment } from '@/generated/graphql';
import { usePriceRound } from '@/utils/usePriceRound';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

interface ProductProps {
    data: ItemSnippetFragment;
}

const Product: React.FC<ProductProps> = ({ data }) => {
    return (
        <Flex key={data.id} p={5} shadow="md" borderWidth="1px">
            <RatingSection item={data} />
            <Box flex={1}>
                <Flex>
                    <NextLink href="/item/[id]" as={`/item/${data.id}`}>
                        <Link flexGrow={1}>
                            <Heading fontSize="2xl">{data.title}</Heading>
                        </Link>
                    </NextLink>
                    <Text>${usePriceRound(data.price)}</Text>
                </Flex>
                <Flex justify="space-between" mb={4}>
                    <Text>categories: {data.category}</Text>
                    <Text>added by {data.creator.username}</Text>
                </Flex>
                <Flex align="center">
                    <Text flex={1} mt={4}>
                        {data.descriptionSnippet}
                    </Text>
                    <Box ml="auto">
                        <ItemActionButtons id={data.id} creatorId={data.creator.id} />
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Product;
