import { ComponentWithAs, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';
import ErrorField from '../ErrorField';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
    isTextarea?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({ label, isTextarea, ...props }) => {
    let InputOrTextarea = (isTextarea ? Textarea : Input) as ComponentWithAs<React.ElementType<any>>;
    const [field, { touched, error }] = useField(props);

    return (
        <FormControl mb={8} isInvalid={!!touched && !!error}>
            <FormLabel htmlFor={field.name}>{label}</FormLabel>
            <InputOrTextarea {...field} {...props} id={field.name} />
            <ErrorField label={label} touched={touched} error={error} />
        </FormControl>
    );
};

export default InputField;
