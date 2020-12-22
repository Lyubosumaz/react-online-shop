import React, { useState } from 'react';
import { Field, withTypes } from 'react-final-form';
import { useRegisterMutation } from '../generated/graphql';
import stylesSpinner from '../styles/Spinner.module.scss';
import { toErrorMap } from '../utils/toErrorMap';
import { useRouter } from 'next/router';

interface ErrType {
    [key: string]: string;
}

type MyValues = {
    username: string;
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
                        const response = await register(values);
                        if (response.data?.register.errors) {
                            setErrors(toErrorMap(response.data.register.errors));
                        } else if (response.data?.register.user) {
                            setErrors({});
                            router.push('/');
                        }
                    }
                }}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="username" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <label>Username</label>
                                    <input {...input} type="text" placeholder="username" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                    {errors['username'] ? <div>{errors['username']}</div> : <div>123</div>}
                                    {meta.validating && <div className={stylesSpinner.div}></div>}
                                </div>
                            )}
                        </Field>

                        <Field name="password" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <label>Password</label>
                                    <input {...input} type="password" placeholder="password" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                    {errors['password'] ? <div>{errors['password']}</div> : <div>123</div>}
                                    {meta.validating && <div className={stylesSpinner.div}></div>}
                                </div>
                            )}
                        </Field>

                        <div className="buttons">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                )}
            />
        </>
    );
};

export default Register;
