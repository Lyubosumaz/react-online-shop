import { FormErrorMessage } from '@chakra-ui/react';
import React from 'react';

const ErrorField: React.FC<any> = ({ label, error }) => {
    console.log(error);
    return error ? (
        <FormErrorMessage>
            {label} {error}
        </FormErrorMessage>
    ) : null;
};

export default ErrorField;
