import React from 'react';
import { withTypes } from 'react-final-form';
import Wrapper from '../MainWrapper';

interface FormWrapperProps {
    children: React.ReactNode;
    fieldType?: any;
    funcOnSubmit?: any;
}

type MyValues = {
    [key: string]: string;
};

const FormWrapper: React.FC<FormWrapperProps> = ({ children, fieldType, funcOnSubmit }) => {
    const { Form } = withTypes<MyValues>();

    return (
        <>
            <Form
                onSubmit={
                    // this should be funcOnSubmit
                    async (values) => {
                        console.log(values);
                    }
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
