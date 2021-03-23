import { Flex } from '@chakra-ui/layout';
import { IconButton, Input } from '@chakra-ui/react';
import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Quantity: React.FC<{}> = ({ }) => {
    return (
        <Flex>
            <IconButton aria-label="decrement" icon={<FaMinus />} />
            <Input />
            <IconButton aria-label="increment" icon={<FaPlus />} />
        </Flex>
    );
};

export default Quantity;
