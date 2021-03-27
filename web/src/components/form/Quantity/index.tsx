import { Flex } from '@chakra-ui/layout';
import { IconButton, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Quantity: React.FC<{}> = ({ }) => {
    const [valueQuantity, setValueQuantity] = useState(-1)

    return (
        <Flex>
            <IconButton
                aria-label="decrement"
                icon={<FaMinus />}
                rounded={0}
                _focus={{ outline: "0.1rem solid", zIndex: "1" }}
                onClick={() => setValueQuantity((prevState): number => prevState - 1)}
            />
            <Input
                w="3rem"
                p="0 0.2rem"
                textAlign="center"
                rounded={0}
                value={valueQuantity}
                disabled
                _disabled={{}}
            />
            <IconButton
                aria-label="increment"
                icon={<FaPlus />}
                rounded={0}
                _focus={{ outline: "0.1rem solid", zIndex: "1" }}
                onClick={() => setValueQuantity((prevState): number => prevState + 1)}
            />
        </Flex>
    );
};

export default Quantity;
