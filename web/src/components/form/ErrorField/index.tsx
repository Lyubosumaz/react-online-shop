import { FormErrorMessage } from '@chakra-ui/react';
import React from 'react';

const ErrorField: React.FC<any> = ({ label, touched, error }) => {
    return touched && error ? (
        <FormErrorMessage>
            {label} {error}
        </FormErrorMessage>
    ) : null;
};

export default ErrorField;
