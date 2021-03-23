import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import React from 'react';

const Quantity: React.FC<{}> = ({ }) => {
    return (
        <Flex>
            <Button>-</Button>
            <input type="text" />
            <Button>+</Button>
        </Flex>
    );
};

export default Quantity;
