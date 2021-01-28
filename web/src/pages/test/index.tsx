import { withUrqlClient } from 'next-urql';
import React, { useState } from 'react';
import { Field } from 'react-final-form';
import MainButton from '../../components/buttons/MainButton';
import FieldFactory from '../../components/form/FieldFactory';
import FormWrapper from '../../layouts/FormWrapper';
import styles from '../../styles/scss/Forms.module.scss';
// import stylesSpinner from '../../styles/scss/Spinner.module.scss';
import { createUrqlClient } from '../../utils/createUrqlClient';

interface ErrType {
    [key: string]: string;
}

const Register: React.FC<{}> = ({}) => {
    const [errors, setErrors] = useState({} as ErrType);
    const required = (value: any) => (value ? undefined : 'Required');

    return (
        <>
            <FormWrapper fieldType={'hmm'}>
                <FieldFactory fieldName={`username8`} fieldLabel={`Username8`} fieldType={`text`} fieldPlaceholder={`88`} />

                <Field name="username" validate={required}>
                    {({ input, meta }) => (
                        <div>
                            <label>Username:</label>
                            <input {...input} type="text" placeholder="John Doe" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                            {errors['username'] ? <div>{errors['username']}</div> : <div>123</div>}
                            {/* {meta.validating && <div className={stylesSpinner.div}></div>} */}
                        </div>
                    )}
                </Field>
                <Field name="username2" validate={required}>
                    {({ input, meta }) => (
                        <div>
                            <label>Username2:</label>
                            <input {...input} type="text" placeholder="John Doe" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                            {errors['username2'] ? <div>{errors['username2']}</div> : <div>123</div>}
                            {/* {meta.validating && <div className={stylesSpinner.div}></div>} */}
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
                            {/* {meta.validating && <div className={stylesSpinner.div}></div>} */}
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
                            {/* {meta.validating && <div className={stylesSpinner.div}></div>} */}
                        </div>
                    )}
                </Field>
                <div className={styles[`button-wrapper`]}>
                    <MainButton text={'Register'} type={'submit'} />
                </div>
            </FormWrapper>
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Register);
