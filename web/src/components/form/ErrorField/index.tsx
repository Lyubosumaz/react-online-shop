import { FormErrorMessage } from '@chakra-ui/react';
import { FC } from 'react';
interface ErrorFieldProp {
    label: string;
    touched: boolean;
    error: string | undefined;
}

export const ErrorField: FC<ErrorFieldProp> = ({ label, touched, error }) => {
    return (
        touched && error
            ? (
                <FormErrorMessage>
                    {label} {error}
                </FormErrorMessage>
            )
            : null
    );
};
