import { ItemActionButtons } from '@/components/cards/item/ItemActionButtons';
import { RatingSection } from '@/components/cards/item/RatingSection';
import { ItemSnippetFragment } from '@/generated/graphql';
import { usePriceRound } from '@/utils/usePriceRound';
import { Button, Flex, Heading, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

interface ProductProps {
    data: ItemSnippetFragment;
}

const ProductImage: React.FC<{}> = ({ }) => {
    return (
        <Flex
            w="170px"
            h="270px"
            justify="center"
            align="center"
            backgroundColor="gray.400"
        >Image</Flex>
    )
}

const Product: React.FC<ProductProps> = ({ data }) => {
    return (
        <>
            <Flex>
                <NextLink href="/item/[id]" as={`/item/${data.id}`}>
                    <Link flexGrow={1}>
                        <Heading textAlign="center" fontSize="2xl">{data.title}</Heading>
                    </Link>
                </NextLink>
            </Flex>

            <Flex flexDirection="column" justify="center" align="center">
                <ProductImage />
                <Text>${usePriceRound(data.price)}</Text>
                <Button>Add to Cart</Button>
            </Flex>

            <Flex flexDirection="column" justify="space-between">
                <Text alignSelf="flex-start">categories: {data.category}</Text>
                <Text alignSelf="flex-end">added by {data.creator.username}</Text>
            </Flex>

            <Flex flexDirection="column">
                <Text>{data.descriptionSnippet}</Text>

                <Flex justify="space-between" align="center">
                    <RatingSection item={data} />
                    <ItemActionButtons id={data.id} creatorId={data.creator.id} />
                </Flex>
            </Flex>
        </>
    );
};

export default Product;
