import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { withTypes } from 'react-final-form';
import { useRegisterMutation } from '../../generated/graphql';
import { toErrorMap } from '../../utils/toErrorMap';
import Wrapper from '../MainWrapper';

interface FormWrapperProps {
    children: React.ReactNode;
    exactBtn?: any;
}

type MyValues = {
    [key: string]: string;
};

type registerValues = {
    username: string;
    email: string;
    password: string;
};

interface ErrType {
    [key: string]: string;
}
const FormWrapper: React.FC<FormWrapperProps> = ({ children, exactBtn }) => {
    const { Form } = withTypes<MyValues>();
    const router = useRouter();
    const [errors, setErrors] = useState({} as ErrType);

    const handleSubmit = (select: any, values: any) => {
        switch (select) {
            case 'register':
                const [, register] = useRegisterMutation();

                async (values: registerValues) => {
                    if (values.username && values.password) {
                        const response = await register({ options: values });

                        if (response.data?.register.errors) {
                            setErrors(toErrorMap(response.data.register.errors));
                        } else if (response.data?.register.user) {
                            setErrors({});
                            router.push('/');
                        }
                    }
                };
                break;
            case 'test':
                (async () => {
                    console.log('values', exactBtn, values);
                })();
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Form
                onSubmit={(values) => handleSubmit('test', values)}
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
