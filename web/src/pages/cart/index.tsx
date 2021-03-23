import MainLayout from '@/layouts/MainLayout';
import { withApollo } from '@/utils/withApollo';
import { Table, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

const Cart: React.FC<{}> = ({ }) => {
    return (
        <MainLayout>
            <Table size="lg" m="4rem 0" border="0.1rem solid" borderColor="gray.400">
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
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td>25.4</Td>
                        <Td>25.4</Td>
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
