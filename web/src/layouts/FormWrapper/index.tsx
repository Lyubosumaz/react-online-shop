import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { withTypes } from 'react-final-form';
import btn from '../../components/buttons/buttons-text.json';
import { useRegisterMutation } from '../../generated/graphql';
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
    const [, register] = useRegisterMutation();

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
                render={({ handleSubmit }) => (
                    <form className={styles['site-form']} onSubmit={handleSubmit}>
                        <Wrapper>{newChildren}</Wrapper>
                    </form>
                )}
            />
        </>
    );
};

export default FormWrapper;
