import { ActionButtons } from '@/components/cards/Product/ActionButtons';
import { RatingSection } from '@/components/cards/Product/RatingSection';
import { ItemSnippetFragment } from '@/generated/graphql';
import { usePriceRound } from '@/utils/usePriceRound';
import { Box, Button, Flex, Heading, Link, Text, useColorModeValue, useToken } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

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
            bgColor="gray.400"
        >Image</Flex>
    )
}

const Product: React.FC<ProductProps> = ({ data }) => {
    const [bgLightColor, bgDarkColor] = useToken("colors", ["primaryL.600", "primaryD.500"]);
    const bgColor = useColorModeValue(bgLightColor, bgDarkColor);

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
                    leftIcon={<FaShoppingCart size="1.4rem" />}
                    border="0.1rem solid"
                    borderColor={bgColor}
                    _hover={{ color: "white", bgColor: bgColor }}
                >Add to Cart</Button>
            </Flex>

            <Flex mb={6} flexDirection="column" justify="space-between">
                <Text alignSelf="flex-start">
                    <Box as="span" mr="0.5rem">categories:</Box>
                    {/* TODO categories need to be added */}
                    <NextLink href="#">
                        <Link>{data.category}</Link>
                    </NextLink>
                </Text>
                <Text alignSelf="flex-end">
                    <Box as="span" mr="0.5rem">added by:</Box>
                    {/* TODO only admins can see profiles */}
                    <NextLink href="#">
                        <Link>{data.creator.username}</Link>
                    </NextLink>
                </Text>
            </Flex>

            <Flex mt="auto" flexDirection="column">
                <Text>{data.descriptionSnippet}</Text>

                <Flex mt={6} justify="space-between">
                    <RatingSection item={data} />
                    <ActionButtons id={data.id} creatorId={data.creator.id} />
                </Flex>
            </Flex>
        </>
    );
};

export default Product;
