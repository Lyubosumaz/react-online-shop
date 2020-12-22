import React from 'react';
import { Field, withTypes } from 'react-final-form';
import { useMutation } from 'urql';
import stylesSpinner from '../styles/Spinner.module.scss';

type MyValues = {
    username: string;
    password: string;
};
const { Form } = withTypes<MyValues>();
const REGISTER_MUTATION = `
mutation Register($username: String!, $password: String!) {
    register(options: { username: $username, password: $password}) {
        errors {
            field
            message
        }
        user {
            id
            username
        }
    }
}
`;

// const onSubmit = async (values: MyValues) => {
// };

const required = (value: any) => (value ? undefined : 'Required');
// const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), undefined);

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
    const [, register] = useMutation(REGISTER_MUTATION);
    return (
        <>
            <Form
                onSubmit={async (values: MyValues) => {
                    if (values.username && values.password) {
                        const response = await register(values);
                    }
                }}
                render={({ handleSubmit, validating }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="username" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <label>Username</label>
                                    <input {...input} type="text" placeholder="username" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
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
