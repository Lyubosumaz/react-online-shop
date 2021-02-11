import { FormErrorMessage } from '@chakra-ui/react';
import React from 'react';

const ErrorField: React.FC<any> = ({ label, error }) => {
    return error ? <FormErrorMessage>{`${label} is ${error}`}</FormErrorMessage> : null;
};

export default ErrorField;
