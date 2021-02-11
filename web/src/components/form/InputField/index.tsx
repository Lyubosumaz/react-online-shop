import { ComponentWithAs, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
    isTextarea?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({ label, isTextarea, ...props }) => {
    let InputOrTextarea = (isTextarea ? Textarea : Input) as ComponentWithAs<React.ElementType<any>>;
    const [field, { error }] = useField(props);
    // console.log('props: ', props, 'field: ', field, 'error: ', { error });

    return (
        <FormControl mb={8} isInvalid={!!error}>
            <FormLabel htmlFor={field.name}>{label}</FormLabel>
            <InputOrTextarea {...field} {...props} id={field.name} />
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    );
};

export default InputField;
