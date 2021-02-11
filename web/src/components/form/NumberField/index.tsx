import { FormControl, FormErrorMessage, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
};

const NumberField: React.FC<any> = ({ label, ...props }) => {
    const [field, { error }] = useField(props);
    console.log('n props: ', props, 'n field: ', field, 'n error: ', { error });

    return (
        <FormControl mb={8} isInvalid={!!error}>
            <FormLabel htmlFor={field.name}>{label}</FormLabel>
            <NumberInput defaultValue={0.1} precision={2} step={0.1} min={0.05} {...field} {...props} id={field.name}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    );
};

export default NumberField;
