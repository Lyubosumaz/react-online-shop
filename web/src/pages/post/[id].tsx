import { Box, Heading } from '@chakra-ui/core';
import React from 'react';
import { EditDeleteItemButtons } from '../../components/EditDeleteItemButtons';
import { Layout } from '../../components/Layout';
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
        <Layout>
            <Heading mb={4}>{data.item.title}</Heading>
            <Box mb={4}>{data.item.text}</Box>
            <EditDeleteItemButtons id={data.item.id} creatorId={data.item.creator.id} />
        </Layout>
    );
};

export default withApollo({ ssr: true })(Item);
