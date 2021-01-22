import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Field, withTypes } from 'react-final-form';
import MainButton from '../components/buttons/MainButton';
import { useCreateItemMutation } from '../generated/graphql';
import Wrapper from '../layouts/MainWrapper/MainWrapper';
import stylesSpinner from '../styles/scss/3-components/Spinner.module.scss';
import styles from '../styles/scss/4-pages/Forms.module.scss';
import { createUrqlClient } from '../utils/createUrqlClient';
import { useIsAuth } from '../utils/useIsAuth';

interface ErrType {
    [key: string]: string;
}
type MyValues = {
    title: string;
    description: string;
};

const { Form } = withTypes<MyValues>();
const required = (value: any) => (value ? undefined : 'Required');

const CreateItem: React.FC<{}> = ({}) => {
    const router = useRouter();
    useIsAuth();
    const [, createItem] = useCreateItemMutation();
    const [errors, setErrors] = useState({} as ErrType);

    return (
        <>
            <Form
                onSubmit={async (values: MyValues) => {
                    const { error } = await createItem({ input: values });

                    if (!error) {
                        router.push('/');
                    }
                }}
                render={({ handleSubmit }) => (
                    <form className={styles['site-form']} onSubmit={handleSubmit}>
                        <Wrapper>
                            <Field name="title" validate={required}>
                                {({ input, meta }) => (
                                    <div>
                                        <label>Title:</label>
                                        <input {...input} type="text" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                        {errors['title'] ? <div>{errors['title']}</div> : <div>123</div>}
                                        {meta.validating && <div className={stylesSpinner.div}></div>}
                                    </div>
                                )}
                            </Field>

                            <Field name="description" validate={required}>
                                {({ input, meta }) => (
                                    <div>
                                        <label>Description:</label>
                                        <input {...input} type="text" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                        {errors['description'] ? <div>{errors['description']}</div> : <div>123</div>}
                                        {meta.validating && <div className={stylesSpinner.div}></div>}
                                    </div>
                                )}
                            </Field>

                            <div className={styles[`button-wrapper`]}>
                                <MainButton text={'Create Item'} type={'submit'} />
                            </div>
                        </Wrapper>
                    </form>
                )}
            />
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(CreateItem);
