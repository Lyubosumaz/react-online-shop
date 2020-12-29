import { NextPage } from 'next';
import React, { useState } from 'react';
import { withTypes, Field } from 'react-final-form';
import { toErrorMap } from '../../utils/toErrorMap';
import stylesSpinner from '../../styles/scss/3-components/Spinner.module.scss';
import { useChangePasswordMutation } from '../../generated/graphql';
import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../../utils/createUrqlClient';
import NextLink from 'next/link';

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
    const router = useRouter();
    const [, changePassword] = useChangePasswordMutation();
    const [errors, setErrors] = useState({} as ErrType);

    return (
        <>
            <Form
                onSubmit={async (values: MyValues) => {
                    if (values.newPassword && values.repPassword && values.newPassword === values.repPassword) {
                        const response = await changePassword({ token, newPassword: values.newPassword });
                        if (response.data?.changePassword.errors) {
                            setErrors(toErrorMap(response.data.changePassword.errors));
                        } else if (response.data?.changePassword.user) {
                            setErrors({});
                            router.push('/');
                        }
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
                            <NextLink href="/forgotten-password">forgot password?</NextLink>
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

export default withUrqlClient(createUrqlClient, { ssr: false })(ChangePassword as any);
