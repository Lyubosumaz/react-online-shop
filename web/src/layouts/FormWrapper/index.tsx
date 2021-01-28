import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { withTypes } from 'react-final-form';
import btn from '../../components/buttons/buttons-text.json';
import { useRegisterMutation } from '../../generated/graphql';
import { toErrorMap } from '../../utils/toErrorMap';
import Wrapper from '../MainWrapper';

interface FormWrapperProps {
    // children: React.ReactNode;
    children: any;
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

    const handleOnSubmit = (select: any, values: any) => {
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
            case btn.register:
                (async () => {
                    console.log('values', values);
                })();
                break;
            default:
                break;
        }
    };

    const childrenTest = React.Children.map(children, (child, index) => {
        if (!children[children.length - 1]) {
            return React.cloneElement(child, {
                index,
                fieldError: errors,
            });
        }

        return React.cloneElement(child);
    });
    // console.log('true', children);
    // console.log('test', childrenTest);

    return (
        <>
            <Form
                onSubmit={(values) => handleOnSubmit(exactBtn, values)}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        {/* {console.log(children)} */}
                        <Wrapper>{childrenTest}</Wrapper>
                    </form>
                )}
            />
        </>
    );
};

export default FormWrapper;
