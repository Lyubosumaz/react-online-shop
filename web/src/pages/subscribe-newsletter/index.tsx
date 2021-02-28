import MainLayout from '@/layouts/MainLayout';
import { withApollo } from '@/utils/withApollo';
import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import SubscribeNewsletterForm from "./SubscribeNewsletterForm";

const Column: React.FC<{}> = ({ children }) => (
    <Flex padding="0 1rem" justifyContent="center" alignItems="center" flexBasis="50%">
        {children}
    </Flex>
);

const SubscribeNewsletter: React.FC<{}> = ({ }) => {
    return (
        <Box backgroundColor="secondaryL.100">
            <MainLayout>
                <Flex p="6rem 0">
                    <Column>
                        <Image w="100%" h="auto" src={require('@/images/img-6.png')} alt="Garden Sofa" />
                    </Column>

                    <Column>
                        <SubscribeNewsletterForm />
                    </Column>
                </Flex>
            </MainLayout>
        </Box>
    );
};

export default withApollo({ ssr: true })(SubscribeNewsletter);
