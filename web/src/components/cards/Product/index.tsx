import { ActionButtons } from '@/components/cards/Product/ActionButtons';
import { RatingSection } from '@/components/cards/Product/RatingSection';
import { ItemSnippetFragment } from '@/generated/graphql';
import { usePriceRound } from '@/utils/usePriceRound';
import { Button, Flex, Heading, Link, Text, useColorModeValue, useToken } from '@chakra-ui/react';
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
    const [lightColor, darkColor] = useToken("colors", ["primaryL.600", "primaryD.500"]);
    const color = useColorModeValue(lightColor, darkColor);

    return (
        <>
            <Flex my={6} justify="center">
                <NextLink href="/product/[id]" as={`/product/${data.id}`}>
                    <Link>
                        <Heading as="h3" fontSize="2.2rem">{data.title}</Heading>
                    </Link>
                </NextLink>
            </Flex>

            <Flex mb={6} flexDirection="column" justify="center" align="center">
                <ProductImage />
                <Text mt={4} fontSize="1.5rem">${usePriceRound(data.price)}</Text>
                <Button
                    mt={4}
                    border="0.1rem solid"
                    borderColor={color}
                >Add to Cart</Button>
            </Flex>

            <Flex mb={4} flexDirection="column" justify="space-between">
                <Text alignSelf="flex-start">categories: {data.category}</Text>
                <Text alignSelf="flex-end">added by {data.creator.username}</Text>
            </Flex>

            <Flex flexDirection="column">
                <Text>{data.descriptionSnippet}</Text>

                <Flex mt={4} justify="space-between" align="center">
                    <RatingSection item={data} />
                    <ActionButtons id={data.id} creatorId={data.creator.id} />
                </Flex>
            </Flex>
        </>
    );
};

export default Product;
