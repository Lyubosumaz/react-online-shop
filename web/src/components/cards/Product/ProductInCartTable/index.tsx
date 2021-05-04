import { Quantity } from '@/components/form/Quantity';
import { Box, Flex, Td, Text, Tr } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC, useState } from 'react';

interface ProductInCartTableProps {
    productInfo: {
        id: string;
        title: string;
        description: string;
        category: string[];
        price: string;
        quantity: string;
    }
};

const InfoWrapper: FC<{}> = ({ children }) => {
    return (
        <Box
            ml="1.5rem"
            mb="1rem"
            flexBasis="100%"
        >
            {children}
        </Box>
    );
};

export const ProductInCartTable: FC<ProductInCartTableProps> = ({ productInfo }) => {
    const [valueQuantity, setValueQuantity] = useState();

    const handleQuantity = (quantity: any) => {
        setValueQuantity(quantity);
    };

    return (
        <NextLink href="/product/[id]" as={`/product/${productInfo.id}`}>
            <Tr>
                <Td display="flex">
                    <Flex justify="center" align="center">
                        <Flex w="100px" h="125px" justify="center" align="center" bg="gray.200">Image</Flex>
                    </Flex>

                    <Flex flexWrap="wrap" alignContent="space-between">
                        <InfoWrapper>{productInfo.title}</InfoWrapper>

                        <InfoWrapper>{productInfo.description}</InfoWrapper>

                        <InfoWrapper>{productInfo.category}</InfoWrapper>

                        <InfoWrapper>
                            <Text>Модел процесор:   A22</Text>
                            <Text>Доставка до 13.05.2021</Text>
                        </InfoWrapper>
                    </Flex>
                </Td>

                <Td textAlign="center">{productInfo.price}$</Td>
                <Td textAlign="center"><Quantity value={Number(productInfo.quantity)} callback={handleQuantity} /></Td>
                <Td textAlign="center">{(Number(productInfo.price) * Number(valueQuantity)).toFixed(2)}$</Td>
                <Td>x</Td>
            </Tr>
        </NextLink>
    );
};
