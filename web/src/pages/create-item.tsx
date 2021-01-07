import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Field, withTypes } from 'react-final-form';
import Wrapper from '../components/site/Wrapper';
import { useCreateItemMutation, useMeQuery } from '../generated/graphql';
import buttons from '../styles/scss/2-basics/Buttons.module.scss';
import stylesSpinner from '../styles/scss/3-components/Spinner.module.scss';
import styles from '../styles/scss/4-pages/Forms.module.scss';
import { createUrqlClient } from '../utils/createUrqlClient';

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
    const [{ data, fetching }] = useMeQuery();
    const router = useRouter();
    useEffect(() => {
        if (!fetching && !data?.me) {
            router.replace('/login');
        }
    }, [data, fetching, router]);
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
                                <button className={buttons[`main-btn`]} type="submit">
                                    Create Item
                                </button>
                            </div>
                        </Wrapper>
                    </form>
                )}
            />
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(CreateItem);
