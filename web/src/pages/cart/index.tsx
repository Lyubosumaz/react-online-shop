import { Quantity } from '@/components/form/Quantity';
import MainLayout from '@/layouts/MainLayout';
import { withApollo } from '@/utils/withApollo';
import { Box, Flex, Table, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

const Cart: React.FC<{}> = ({ }) => {
    const pseudoProduct =
    {
        id: "number",
        category: "string", // categories []
        title: "string",
        description: "string",
        price: "number",
        rating: "number",
        voteStatus: "int",
        creatorId: "number",
        creator: { id: "number", username: "string", },
        createdAt: "string",
        updatedAt: "string",
        descriptionSnippet: "string",
    };

    return (
        <MainLayout>
            <Table
                size="lg"
                m="4rem 0"
                border="0.1rem solid"
                borderColor="gray.400"
            >
                <Thead>
                    <Tr>
                        <Th>Product</Th>
                        <Th>Unit Price</Th>
                        <Th>Quantity</Th>
                        <Th>Total</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr key={pseudoProduct.id}>
                        <Td display="flex">
                            <Box>
                                <Flex w="100px" h="125px" justify="center" align="center" bg="gray.200">Image</Flex>
                            </Box>

                            <Flex flexWrap="wrap" alignContent="space-between">
                                <Box flexBasis="100%">{pseudoProduct.title}</Box>
                                <Box flexBasis="100%">{pseudoProduct.description}</Box>
                                <Box flexBasis="100%">{pseudoProduct.category}</Box>
                                <Box flexBasis="100%">
                                    <Text>Модел процесор:   A22</Text>
                                    <Text>Доставка до 13.05.2021</Text>
                                </Box>
                            </Flex>
                        </Td>
                        <Td>{pseudoProduct.price}</Td>
                        <Td><Quantity /></Td>
                        <Td>pseudoProduct.price * Quantity</Td>
                        <Td>x</Td>
                    </Tr>
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td>25.4</Td>
                        <Td><Quantity /></Td>
                        <Td>x</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td>30.48</Td>
                        <Td>25.4</Td>
                        <Td>x</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td>30.48</Td>
                        <Td>0.91444</Td>
                        <Td>x</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th>multiply by</Th>
                        <Th>0.91444</Th>
                        <Th>x</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </MainLayout>
    );
};

export default withApollo({ ssr: false })(Cart);
