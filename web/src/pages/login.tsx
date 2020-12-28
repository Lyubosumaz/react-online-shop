import React, { useState } from 'react';
import { Field, withTypes } from 'react-final-form';
import { useLoginMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMap';
import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
import stylesSpinner from '../styles/Spinner.module.scss';
import Wrapper from '../components/site/Wrapper';
import styles from '../styles/scss/Forms.module.scss';

interface ErrType {
    [key: string]: string;
}

type MyValues = {
    usernameOrEmail: string;
    password: string;
};

const { Form } = withTypes<MyValues>();
const required = (value: any) => (value ? undefined : 'Required');
// const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), undefined);

const Login: React.FC<{}> = ({}) => {
    const router = useRouter();
    const [, login] = useLoginMutation();
    const [errors, setErrors] = useState({} as ErrType);

    return (
        <>
            <Form
                onSubmit={async (values: MyValues) => {
                    if (values.usernameOrEmail && values.password) {
                        const response = await login(values);

                        if (response.data?.login.errors) {
                            setErrors(toErrorMap(response.data.login.errors));
                        } else if (response.data?.login.user) {
                            setErrors({});
                            router.push('/');
                        }
                    }
                }}
                render={({ handleSubmit }) => (
                    <form className={styles['site-form']} onSubmit={handleSubmit}>
                        <Wrapper>
                            <Field name="usernameOrEmail" validate={required}>
                                {({ input, meta }) => (
                                    <div>
                                        <label>Username or Email</label>
                                        <input {...input} type="text" placeholder="John Doe or john@doe.com" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                        {errors['usernameOrEmail'] ? <div>{errors['usernameOrEmail']}</div> : <div>123</div>}
                                        {meta.validating && <div className={stylesSpinner.div}></div>}
                                    </div>
                                )}
                            </Field>

                            <Field name="password" validate={required}>
                                {({ input, meta }) => (
                                    <div>
                                        <label>Password</label>
                                        <input {...input} type="password" placeholder="********" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                        {errors['password'] ? <div>{errors['password']}</div> : <div>123</div>}
                                        {meta.validating && <div className={stylesSpinner.div}></div>}
                                    </div>
                                )}
                            </Field>

                            <div className={styles[`button-wrapper`]}>
                                <button type="submit">Login</button>
                            </div>
                        </Wrapper>
                    </form>
                )}
            />
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Login);
