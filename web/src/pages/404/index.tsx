import ColorMode from '@/components/buttons/ColorMode';
import { withApollo } from '@/utils/withApollo';
import { Box, Button, Divider, Flex, Heading, Text, useToken } from '@chakra-ui/react';
import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';

const FourOhFour: React.FC<{}> = ({ }) => {
    const [lightColor, darkColor] = useToken("colors", ["secondaryL.100", "primaryD.900"]);

    return (
        <Flex h="100vh" bgColor="teal.300" justify="center" align="center">
            <Box pb="8rem" color="whiteAlpha.900" >
                <Flex pb="2rem">
                    <Box pr="2rem" alignSelf="center">
                        <Heading as="h1" fontSize="15rem" fontWeight="normal" lineHeight={1}>404</Heading>
                    </Box>

                    <Divider h="16rem" borderLeftWidth="0.2rem" borderColor="whiteAlpha.900" orientation="vertical" />

                    <Flex pl="2rem" flexBasis="100%" flexDirection="column" alignSelf="center">
                        <Heading as="h2" size="2xl" fontWeight="normal">Sorry !</Heading>
                        <Text maxW="25rem" fontSize="1.75rem">The Page You're Looking For Was Not Found</Text>
                        <Button leftIcon={<FaChevronLeft />} alignSelf="flex-start" bgColor="transparent" >Go Back</Button>
                    </Flex>
                </Flex>
                <Box>
                    <Box h="3rem" bgColor="blue">Input field</Box>
                    <ColorMode control="custom" />
                </Box>
            </Box>
        </Flex>
    );
};

export default withApollo({ ssr: false })(FourOhFour);
