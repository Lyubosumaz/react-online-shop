import { ActionButtons } from '@/components/cards/Product/ActionButtons';
import MainLayout from '@/layouts/MainLayout';
import { useGetItemFromUrl } from '@/utils/useGetItemFromUrl';
import { withApollo } from '@/utils/withApollo';
import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

const Item = ({ }) => {
    const { data, error, loading } = useGetItemFromUrl();

    if (loading) {
        return (
            <MainLayout>
                <div>loading...</div>
            </MainLayout>
        );
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    if (!data?.item) {
        return (
            <MainLayout>
                <Box>could not find item</Box>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <Heading mb={4}>{data.item.title}</Heading>
            <Box mb={4}>{data.item.description}</Box>
            <ActionButtons id={data.item.id} creatorId={data.item.creator.id} />
        </MainLayout>
    );
};

export default withApollo({ ssr: true })(Item);
