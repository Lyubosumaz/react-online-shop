import ColumnWrapper from '@/layouts/ColumnWrapper';
import MainLayout from '@/layouts/MainLayout';
import { withApollo } from '@/utils/withApollo';
import { Box, Button, Heading, Image, Text, useColorModeValue, useToken } from '@chakra-ui/react';
import React from 'react';

const AboutBody: React.FC<{}> = ({ }) => {
    const [lightColor, darkColor] = useToken("colors", ["primaryL.700", "primaryD.500"]);
    const mainColor = useColorModeValue(lightColor, darkColor);

    return (
        <Box>
            <Heading mb="1rem" color={mainColor}>About Us</Heading>
            <Text mb="1.5rem">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</Text>
            <Button
                p="1.5rem 2rem"
                border="0.1rem solid"
                borderColor={mainColor}
                background="transparent"
                rounded={0}
                color={mainColor}
                _hover={{ background: mainColor, color: "white" }}
            >
                Read More
            </Button>
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
                    borderLocation="left"
                />
            </MainLayout>
        </Box>
    );
};

export default withApollo({ ssr: true })(AboutUs);
