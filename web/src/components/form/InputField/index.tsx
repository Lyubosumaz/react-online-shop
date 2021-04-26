import { ErrorField } from '@/components/form/ErrorField';
import { ComponentWithAs, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { useField } from 'formik';
import { ElementType, FC, InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
    isTextarea?: boolean;
};

export const InputField: FC<InputFieldProps> = ({ label, isTextarea, ...props }) => {
    let InputOrTextarea = (isTextarea ? Textarea : Input) as ComponentWithAs<ElementType<any>>;
    const [field, { touched, error }] = useField(props);

    return (
        <FormControl mb={8} isInvalid={!!touched && !!error}>
            <FormLabel htmlFor={field.name}>{label}</FormLabel>
            <InputOrTextarea {...field} {...props} id={field.name} />
            <ErrorField label={label} touched={touched} error={error} />
        </FormControl>
    );
};
