import { Flex } from '@chakra-ui/layout';
import { IconButton, Input } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

export const Quantity: FC<{ value: string | number, callback: any }> = ({ value, callback }) => {
    const [valueQuantity, setValueQuantity] = useState(Number(value));

    useEffect(() => {
        callback(valueQuantity)
    }, [valueQuantity])

    return (
        <Flex rounded={0}>
            <IconButton
                aria-label="decrement"
                icon={<FaMinus />}
                rounded="inherit"
                _focus={{ outline: "0.1rem solid", zIndex: "1" }}
                onClick={() => setValueQuantity((prevState): number => prevState - 1)}
            />

            <Input
                w="3rem"
                p="0 0.2rem"
                textAlign="center"
                rounded="inherit"
                value={valueQuantity}
                disabled
                _disabled={{}}
            />

            <IconButton
                aria-label="increment"
                icon={<FaPlus />}
                rounded="inherit"
                _focus={{ outline: "0.1rem solid", zIndex: "1" }}
                onClick={() => setValueQuantity((prevState): number => prevState + 1)}
            />
        </Flex>
    );
};
