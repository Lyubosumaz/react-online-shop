import React from 'react';
import { withTypes } from 'react-final-form';
import Wrapper from '../MainWrapper';

type MyValues = {
    username: string;
    email: string;
    password: string;
};

interface FormWrapperProps {
    children: React.ReactNode;
    fieldType?: any;
    funcOnSubmit?: any;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children, fieldType, funcOnSubmit }) => {
    const { Form } = withTypes<MyValues>();

    return (
        <>
            <Form
                onSubmit={
                    // this should be funcOnSubmit
                    async () => {}
                }
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Wrapper>{children}</Wrapper>
                    </form>
                )}
            />
        </>
    );
};

export default FormWrapper;
