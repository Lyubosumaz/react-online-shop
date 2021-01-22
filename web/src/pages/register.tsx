import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Field, withTypes } from 'react-final-form';
import MainButton from '../components/buttons/MainButton';
import { useRegisterMutation } from '../generated/graphql';
import Wrapper from '../layouts/MainWrapper/MainWrapper';
import stylesSpinner from '../styles/scss/3-components/Spinner.module.scss';
import styles from '../styles/scss/4-pages/Forms.module.scss';
import { createUrqlClient } from '../utils/createUrqlClient';
import { toErrorMap } from '../utils/toErrorMap';

interface ErrType {
    [key: string]: string;
}

type MyValues = {
    username: string;
    email: string;
    password: string;
};

const { Form } = withTypes<MyValues>();
const required = (value: any) => (value ? undefined : 'Required');
// const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), undefined);

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
    const router = useRouter();
    const [, register] = useRegisterMutation();
    const [errors, setErrors] = useState({} as ErrType);

    return (
        <>
            <Form
                onSubmit={async (values: MyValues) => {
                    if (values.username && values.password) {
                        const response = await register({ options: values });
                        if (response.data?.register.errors) {
                            setErrors(toErrorMap(response.data.register.errors));
                        } else if (response.data?.register.user) {
                            setErrors({});
                            router.push('/');
                        }
                    }
                }}
                render={({ handleSubmit }) => (
                    <form className={styles['site-form']} onSubmit={handleSubmit}>
                        <Wrapper>
                            <Field name="username" validate={required}>
                                {({ input, meta }) => (
                                    <div>
                                        <label>Username:</label>
                                        <input {...input} type="text" placeholder="John Doe" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                        {errors['username'] ? <div>{errors['username']}</div> : <div>123</div>}
                                        {meta.validating && <div className={stylesSpinner.div}></div>}
                                    </div>
                                )}
                            </Field>

                            <Field name="email" validate={required}>
                                {({ input, meta }) => (
                                    <div>
                                        <label>Email:</label>
                                        <input {...input} type="text" placeholder="john@doe.com" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                        {errors['email'] ? <div>{errors['email']}</div> : <div>123</div>}
                                        {meta.validating && <div className={stylesSpinner.div}></div>}
                                    </div>
                                )}
                            </Field>

                            <Field name="password" validate={required}>
                                {({ input, meta }) => (
                                    <div>
                                        <label>Password:</label>
                                        <input {...input} type="password" placeholder="********" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                        {errors['password'] ? <div>{errors['password']}</div> : <div>123</div>}
                                        {meta.validating && <div className={stylesSpinner.div}></div>}
                                    </div>
                                )}
                            </Field>

                            <div className={styles[`button-wrapper`]}>
                                <MainButton text={'Register'} type={'submit'} />
                            </div>
                        </Wrapper>
                    </form>
                )}
            />
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Register);
