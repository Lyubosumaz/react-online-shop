import ColumnWrapper from "@/layouts/ColumnWrapper";
import MainLayout from '@/layouts/MainLayout';
import { withApollo } from '@/utils/withApollo';
import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import SubscribeNewsletterForm from "./SubscribeNewsletterForm";

const SubscribeNewsletter: React.FC<{}> = ({ }) => {
    return (
        <Box backgroundColor="secondaryL.100">
            <MainLayout>
                <ColumnWrapper
                    left={<Image w="100%" h="auto" src={require('@/images/img-6.png')} alt="Garden Sofa" />}
                    right={<SubscribeNewsletterForm />}
                />
            </MainLayout>
        </Box>
    );
};

export default withApollo({ ssr: true })(SubscribeNewsletter);
