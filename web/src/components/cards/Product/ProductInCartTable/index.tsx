import { Box, Flex, Td, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

interface ProductInCartTableProps {
    productInfo: {
        title: string;
        description: string;
        category: string[];
    }
};

const InfoWrapper: FC<{}> = ({ children }) => {
    return (
        <Box
            ml="1.5rem"
            mb="1rem"
            flexBasis="100%"
        >{children}</Box>
    );
};

export const ProductInCartTable: FC<ProductInCartTableProps> = ({ productInfo }) => {
    return (
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
    );
};
