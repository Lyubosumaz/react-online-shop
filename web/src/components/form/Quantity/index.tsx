import { Flex } from '@chakra-ui/layout';
import { IconButton, Input } from '@chakra-ui/react';
import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Quantity: React.FC<{}> = ({ }) => {
    return (
        <Flex>
            <IconButton aria-label="decrement" icon={<FaMinus />} rounded={0} />
            <Input w="3rem" p="0 0.2rem" textAlign="center" rounded={0} />
            <IconButton aria-label="increment" icon={<FaPlus />} rounded={0} />
        </Flex>
    );
};

export default Quantity;
