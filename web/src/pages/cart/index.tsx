import { ProductInCartTable } from "@/components/cards/Product/ProductInCartTable";
import MainLayout from '@/layouts/MainLayout';
import { withApollo } from '@/utils/withApollo';
import { Table, Tbody, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { FC } from 'react';

const Cart: FC<{}> = ({ }) => {
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
    ];

    // TODO: should receive data from db
    const userTotalAmount = pseudoProducts.reduce((accumulator, product) => {
        return accumulator + Number(product.price) * Number(product.quantity);
    }, 0);

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
                        <Th w="37%" textAlign="center">Product</Th>
                        <Th textAlign="center">Unit Price</Th>
                        <Th textAlign="center">Quantity</Th>
                        <Th w="17%" textAlign="center">Selected Total</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {/* TODO: after fetching from the db */}
                    {pseudoProducts.map((product) => <ProductInCartTable key={product.id} productInfo={product} />)}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th></Th>
                        <Th></Th>
                        <Th></Th>
                        <Th>Your total:</Th>
                        <Th>{userTotalAmount}</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </MainLayout>
    );
};

export default withApollo({ ssr: false })(Cart);
