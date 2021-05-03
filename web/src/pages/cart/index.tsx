import { ProductInCartTable } from "@/components/cards/Product/ProductInCartTable";
import { Quantity } from '@/components/form/Quantity';
import MainLayout from '@/layouts/MainLayout';
import { withApollo } from '@/utils/withApollo';
import { Table, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

const Cart: React.FC<{}> = ({ }) => {
    const pseudoProducts = [
        {
            id: "32131",
            category: ["boots", "clothing"],
            title: "Some great product waiting to be bought",
            description: "best thing ever",
            price: "20.33",
            rating: "number",
            voteStatus: "int",
            creatorId: "number",
            creator: { id: "number", username: "string", },
            createdAt: "string",
            updatedAt: "string",
            descriptionSnippet: "best thing ever",
            // needed
            quantity: "1",
        },
        {
            id: "98951",
            category: ["shirt"],
            title: "Best product",
            description: "something that get used many more times then one time",
            price: "99.99",
            rating: "number",
            voteStatus: "int",
            creatorId: "number",
            creator: { id: "number", username: "string", },
            createdAt: "string",
            updatedAt: "string",
            descriptionSnippet: "something that get used many more times then one time",
            quantity: "2",
        },
    ]

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
                    {/* TODO: after fetching from the db */}
                    {pseudoProducts.map((product) => {
                        return (
                            <Tr key={product.id}>
                                <ProductInCartTable productInfo={product} />
                                <Td>{product.price}</Td>
                                <Td><Quantity /></Td>
                                <Td>pseudoProduct.price * Quantity</Td>
                                <Td>x</Td>
                            </Tr>
                        );
                    })}
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
