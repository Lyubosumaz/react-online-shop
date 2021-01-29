import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { withTypes } from 'react-final-form';
import btn from '../../components/buttons/buttons-text.json';
import { useForgottenPasswordMutation, useLoginMutation, useRegisterMutation } from '../../generated/graphql';
import { toErrorMap } from '../../utils/toErrorMap';
import Wrapper from '../MainWrapper';
import styles from './FormWrapper.module.scss';

interface FormWrapperProps {
    // children: React.ReactNode; // TODO
    children: any;
    exactBtn?: any;
}

type MyValues = {
    [key: string]: string;
};

type RegisterValues = {
    username: string;
    email: string;
    password: string;
};

type LoginValues = {
    usernameOrEmail: string;
    password: string;
};

type ForgottenPasswordValues = {
    email: string;
};

interface ErrType {
    [key: string]: string;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children, exactBtn }) => {
    const { Form } = withTypes<MyValues>();
    const router = useRouter();
    const [errors, setErrors] = useState({} as ErrType);
    const [complete, setComplete] = useState(false);
    const [, register] = useRegisterMutation();
    const [, login] = useLoginMutation();
    const [, forgottenPassword] = useForgottenPasswordMutation();

    const handleOnSubmit = (clickedBtn: string) => {
        switch (clickedBtn) {
            case btn.register:
                return async (values: any) => {
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
            case btn.login:
                return async (values: any) => {
                    if (values.usernameOrEmail && values.password) {
                        const response = await login(values);

                        if (response.data?.login.errors) {
                            setErrors(toErrorMap(response.data.login.errors));
                        } else if (response.data?.login.user) {
                            setErrors({});

                            if (typeof router.query.next === 'string') {
                                router.push(router.query.next);
                            } else {
                                router.push('/');
                            }
                        }
                    }
                };
            case btn.forgottenPassword:
                return async (values: any) => {
                    await forgottenPassword(values);
                    setComplete(true);
                };
            default:
                return async () => {
                    setErrors({ form: 'There is a problem' });
                };
        }
    };

    const newChildren = React.Children.map(children, (child, index) => {
        if (children.length - 1 === index) return React.cloneElement(child); // last element is submit button

        return React.cloneElement(child, {
            index,
            fieldError: errors,
        });
    });

    return (
        <>
            <Form
                onSubmit={(values) => handleOnSubmit(exactBtn)(values)}
                render={({ handleSubmit }) =>
                    complete ? (
                        <div>If account with that email exists, we sent you an email within 10 minutes</div>
                    ) : (
                        <form className={styles['site-form']} onSubmit={handleSubmit}>
                            <Wrapper>{newChildren}</Wrapper>
                        </form>
                    )
                }
            />
        </>
    );
};

export default FormWrapper;
