import { withUrqlClient } from 'next-urql';
import React, { useState } from 'react';
import btn from '../../components/buttons/buttons-text.json';
import MainButton from '../../components/buttons/MainButton';
import FieldFactory from '../../components/form/FieldFactory';
import ButtonWrapper from '../../layouts/ButtonWrapper';
import FormWrapper from '../../layouts/FormWrapper';
import { createUrqlClient } from '../../utils/createUrqlClient';

const Register: React.FC<{}> = ({}) => {
    const [btnName, setBtnName] = useState({});

    const handleCallback = (arg: string) => {
        setBtnName(arg);
    };

    return (
        <>
            <FormWrapper exactBtn={btnName}>
                <FieldFactory fieldName={`username`} fieldLabel={`Username`} fieldType={`text`} fieldPlaceholder={`John Doe`} />

                <FieldFactory fieldName={`email`} fieldLabel={`Email`} fieldType={`text`} fieldPlaceholder={`john@doe.com`} />

                <FieldFactory fieldName={`password`} fieldLabel={`Password`} fieldType={`password`} fieldPlaceholder={`********`} />

                <ButtonWrapper>
                    <MainButton text={btn.register} type={'submit'} callback={handleCallback} />
                </ButtonWrapper>
            </FormWrapper>

            {/* <Form
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
                                        {meta.validating && <div>1</div>}
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
                                    </div>
                                )}
                            </Field>

                            <div className={styles[`button-wrapper`]}>
                                <MainButton text={'Register'} type={'submit'} />
                            </div>
                        </Wrapper>
                    </form>
                )}
            /> */}
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Register);
