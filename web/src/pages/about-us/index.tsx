import ColumnWrapper from '@/layouts/ColumnWrapper';
import MainLayout from '@/layouts/MainLayout';
import { withApollo } from '@/utils/withApollo';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const AboutBody: React.FC<{}> = ({ }) => {
    return (
        <Box>
            <Heading>About Us</Heading>
            <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</Text>
        </Box>
    );
}

const AboutUs: React.FC<{}> = ({ }) => {
    return (
        <Box>
            <MainLayout>
                <ColumnWrapper
                    left={<Image w="auto" h="100%" src={require('@/images/img-2.png')} alt="Fancy Chair" />}
                    right={<AboutBody />}
                />
            </MainLayout>
        </Box>
    );
};

export default withApollo({ ssr: true })(AboutUs);
