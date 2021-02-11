import { Box, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputProps, NumberInputStepper } from '@chakra-ui/react';
import React, { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<NumberInputProps> & {
    name: string;
    label: string;
    callback: (arg: string) => void;
};

const NumberField: React.FC<InputFieldProps> = ({ name, label, callback }) => {
    const handleChange = (event: any) => {
        console.log(event);
        // callback(event);
    };

    return (
        <Box mb={8}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <NumberInput id={name} defaultValue={0} onChange={handleChange} precision={2} step={0.1} min={0.05}>
                <NumberInputField id={name} onChange={handleChange} />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </Box>
    );
};

export default NumberField;
