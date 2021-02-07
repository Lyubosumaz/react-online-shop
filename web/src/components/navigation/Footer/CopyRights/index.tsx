import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const CopyRights: React.FC<{}> = ({}) => {
    return (
        <Flex p="1rem 0" justifyContent="center" alignItems="center">
            <Text>2020-{new Date().getFullYear()} All Rights Restricted. Design by Free html Templates</Text>
        </Flex>
    );
};

export default CopyRights;
