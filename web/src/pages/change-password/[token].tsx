import { NextPage } from 'next';
import router from 'next/dist/next-server/lib/router/router';
import React, { useState } from 'react';
import { withTypes, Field } from 'react-final-form';
import { toErrorMap } from '../../utils/toErrorMap';
import login from '../login';
import stylesSpinner from '../../styles/Spinner.module.scss';

interface ErrType {
    [key: string]: string;
}

type MyValues = {
    newPassword: string;
    repPassword: string;
};

const { Form } = withTypes<MyValues>();
const required = (value: any) => (value ? undefined : 'Required');

const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
    const [errors, setErrors] = useState({} as ErrType);

    return (
        <>
            <Form
                onSubmit={async (values: MyValues) => {
                    if (values.newPassword && values.repPassword && values.newPassword === values.repPassword) {
                        // const response = await login(values);
                        // if (response.data?.login.errors) {
                        //     setErrors(toErrorMap(response.data.login.errors));
                        // } else if (response.data?.login.user) {
                        //     setErrors({});
                        //     router.push('/');
                        // }
                    }
                }}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="newPassword" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <label>New password</label>
                                    <input {...input} type="password" placeholder="New password" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                    {errors['newPassword'] ? <div>{errors['newPassword']}</div> : <div>123</div>}
                                    {meta.validating && <div className={stylesSpinner.div}></div>}
                                </div>
                            )}
                        </Field>

                        <Field name="repPassword" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <label>Repeat password</label>
                                    <input {...input} type="password" placeholder="Repeat password" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                    {errors['repPassword'] ? <div>{errors['repPassword']}</div> : <div>123</div>}
                                    {meta.validating && <div className={stylesSpinner.div}></div>}
                                </div>
                            )}
                        </Field>

                        <div className="buttons">
                            <button type="submit">Change Password</button>
                            {errors['token'] ? <div>{errors['token']}</div> : <div>123</div>}
                        </div>
                    </form>
                )}
            />
        </>
    );
};

ChangePassword.getInitialProps = ({ query }) => {
    return {
        token: query.token as string,
    };
};

export default ChangePassword;
