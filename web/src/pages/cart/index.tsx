import MainLayout from '@/layouts/MainLayout';
import { withApollo } from '@/utils/withApollo';
import { Table, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

const Cart: React.FC<{}> = ({ }) => {
    return (
        <MainLayout>
            <Table size="sm" m="4rem 0" border="0.1rem solid" borderColor="gray.400">
                <Thead>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </MainLayout>
    );
};

export default withApollo({ ssr: false })(Cart);
