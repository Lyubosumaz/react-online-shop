import { withApollo } from '@/utils/withApollo';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const FourOhFour: React.FC<{}> = ({ }) => {
    return (
        <>
            <Box h="100vh" bgColor="teal" >
                <Box>
                    <Flex>
                        <Box>
                            <Text fontSize="5rem">404</Text>
                        </Box>
                        <Box>
                            <Heading>Sorry!</Heading>
                            <Text>The Page You're Looking For Was Not Found</Text>
                            <Button>Go Back</Button>
                        </Box>
                    </Flex>
                    <Box>Input field</Box>
                </Box>
            </Box>
        </>
    );
};

export default withApollo({ ssr: false })(FourOhFour);
