import { withUrqlClient } from 'next-urql';
import React, { useState } from 'react';
import { Field, withTypes } from 'react-final-form';
import { useForgottenPasswordMutation } from '../../generated/graphql';
import { createUrqlClient } from '../../utils/createUrqlClient';

interface ErrType {
    [key: string]: string;
}

type MyValues = {
    email: string;
};

const { Form } = withTypes<MyValues>();
const required = (value: any) => (value ? undefined : 'Required');

const forgottenPassword: React.FC<{}> = ({}) => {
    const [complete, setComplete] = useState(false);
    const [, forgottenPassword] = useForgottenPasswordMutation();
    const [errors, setErrors] = useState({} as ErrType);

    return (
        <>
            <Form
                onSubmit={async (values: MyValues) => {
                    await forgottenPassword(values);
                    setComplete(true);
                }}
                render={({ handleSubmit }) =>
                    complete ? (
                        <div>if an account with that email exists, we sent you email</div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <Field name="email" validate={required}>
                                {({ input, meta }) => (
                                    <div>
                                        <label>Email</label>
                                        <input {...input} type="text" placeholder="email" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                        {errors['email'] ? <div>{errors['email']}</div> : <div>123</div>}
                                    </div>
                                    // {meta.validating && <div className={stylesSpinner.div}></div>}
                                )}
                            </Field>

                            <div className="buttons">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    )
                }
            />
        </>
    );
};

export default withUrqlClient(createUrqlClient)(forgottenPassword);
