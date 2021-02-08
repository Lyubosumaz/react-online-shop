import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const CopyRights: React.FC<{}> = ({}) => {
    return (
        <Flex p="1.5rem 0" justifyContent="center" alignItems="center" backgroundColor="#fff" color="#100703">
            <Text fontWeight="bold">&copy;2020-{new Date().getFullYear()} All Rights Restricted. Design by Free html Templates</Text>
        </Flex>
    );
};

export default CopyRights;
