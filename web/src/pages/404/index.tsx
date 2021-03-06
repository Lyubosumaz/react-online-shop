import { withApollo } from '@/utils/withApollo';
import { Box, Button, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const FourOhFour: React.FC<{}> = ({ }) => {
    return (
        <>
            <Flex h="100vh" bgColor="teal" justify="center" align="center">
                <Box pb="8rem" >
                    <Flex pb="2rem">
                        <Box pr="2rem" alignSelf="center">
                            <Heading as="h1" fontSize="15rem" fontWeight="normal" lineHeight={1}>404</Heading>
                        </Box>

                        <Divider h="18rem" borderLeftWidth="0.2rem" orientation="vertical" />

                        <Flex pl="2rem" flexBasis="100%" flexDirection="column" alignSelf="center">
                            <Heading as="h2" size="2xl" fontWeight="normal">Sorry !</Heading>
                            <Text maxW="25rem" fontSize="1.75rem">The Page You're Looking For Was Not Found</Text>
                            <Button alignSelf="flex-start">Go Back</Button>
                        </Flex>
                    </Flex>
                    <Box h="3rem" bgColor="blue">Input field</Box>
                </Box>
            </Flex>
        </>
    );
};

export default withApollo({ ssr: false })(FourOhFour);
