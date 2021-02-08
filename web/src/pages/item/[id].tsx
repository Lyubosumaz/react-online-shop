import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { ItemActionButtons } from '../../components/cards/item/ItemActionButtons';
import MainLayout from '../../components/layouts/MainLayout';
import { useGetItemFromUrl } from '../../utils/useGetItemFromUrl';
import { withApollo } from '../../utils/withApollo';

const Item = ({}) => {
    const { data, error, loading } = useGetItemFromUrl();

    if (loading) {
        return (
            <Layout>
                <div>loading...</div>
            </Layout>
        );
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    if (!data?.item) {
        return (
            <Layout>
                <Box>could not find item</Box>
            </Layout>
        );
    }

    return (
        <MainLayout>
            <Heading mb={4}>{data.item.title}</Heading>
            <Box mb={4}>{data.item.description}</Box>
            <ItemActionButtons id={data.item.id} creatorId={data.item.creator.id} />
        </MainLayout>
    );
};

export default withApollo({ ssr: true })(Item);
