import { GoBack } from '@/components/buttons/GoBack';
import { ActionButtons } from '@/components/cards/Product/ActionButtons';
import MainLayout from '@/layouts/MainLayout';
import { useGetItemFromUrl } from '@/utils/useGetItemFromUrl';
import { withApollo } from '@/utils/withApollo';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Product = ({ }) => {
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
                my="2rem"
                display="flex"
                alignItems="center"
                flexDirection="column"
            >
                <Flex >
                    <GoBack control="custom" />
                    <Heading as="h1" mb={6} ml={6}>{data.item.title}</Heading>
                </Flex>
                <Flex alignSelf="flex-start">
                    <Text mb={6}>{data.item.description}</Text>
                </Flex>
                <Flex w="20%" justifyContent="center" alignSelf="flex-end">
                    <ActionButtons id={data.item.id} creatorId={data.item.creator.id} />
                </Flex>
            </Box>
        </MainLayout>
    );
};

export default withApollo({ ssr: true })(Product);
