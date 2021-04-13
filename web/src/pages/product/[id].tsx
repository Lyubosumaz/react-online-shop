import { ActionButtons } from '@/components/cards/Product/ActionButtons';
import MainLayout from '@/layouts/MainLayout';
import { useGetItemFromUrl } from '@/utils/useGetItemFromUrl';
import { withApollo } from '@/utils/withApollo';
import { Box, Heading, Text } from '@chakra-ui/react';
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
            <Box
                as="section"
                display="flex"
                alignItems="center"
                flexDirection="column"
            >
                <Heading as="h1" mb={4}>{data.item.title}</Heading>
                <Text mb={4}>{data.item.description}</Text>
                <Box alignSelf="flex-end">
                    <ActionButtons id={data.item.id} creatorId={data.item.creator.id} />
                </Box>
            </Box>
        </MainLayout>
    );
};

export default withApollo({ ssr: true })(Item);
