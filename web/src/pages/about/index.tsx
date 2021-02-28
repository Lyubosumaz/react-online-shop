import ColumnWrapper from '@/layouts/ColumnWrapper';
import MainLayout from '@/layouts/MainLayout';
import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const AboutBody: React.FC<{}> = ({ }) => {
    return (
        <Box>AboutBody</Box>
    );
}

const About: React.FC<{}> = ({ }) => {
    return (
        <Box backgroundColor="secondaryL.100">
            <MainLayout>
                <ColumnWrapper
                    left={<Image w="100%" h="auto" src={require('@/images/img-2.png')} alt="Garden Sofa" />}
                    right={<AboutBody />}
                />
            </MainLayout>
        </Box>
    );
};

export default About;
