import { ComponentWithAs, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
    isTextarea?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({ label, isTextarea: textarea, ...props }) => {
    let InputOrTextarea = (textarea ? Textarea : Input) as ComponentWithAs<React.ElementType<any>>;
    const [field, { error }] = useField(props);

    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={field.name}>{label}</FormLabel>
            <InputOrTextarea {...field} {...props} id={field.name} />
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    );
};
