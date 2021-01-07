import { NextPage } from 'next';
import { withUrqlClient } from 'next-urql';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Field, withTypes } from 'react-final-form';
import { useChangePasswordMutation } from '../../generated/graphql';
import buttons from '../../styles/scss/2-basics/Buttons.module.scss';
import stylesSpinner from '../../styles/scss/3-components/Spinner.module.scss';
import { createUrqlClient } from '../../utils/createUrqlClient';
import { toErrorMap } from '../../utils/toErrorMap';

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
                            <button className={buttons[`main-btn`]} type="submit">
                                Change Password
                            </button>
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
