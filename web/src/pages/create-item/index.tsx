import { Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { categoryList } from '../../category-list.json'; // TODO create huge categories and sub categories
import InputField from '../../components/form/InputField';
import SelectField from '../../components/form/SelectField';
import { useCreateItemMutation } from '../../generated/graphql';
import SecondaryLayout from '../../layouts/SecondaryLayout';
import { createValidations } from '../../utils/formValidations';
import { useIsAuth } from '../../utils/useIsAuth';
import { withApollo } from '../../utils/withApollo';

interface CreateItemFields {
    category: string;
    title: string;
    description: string;
    price: string;
}

const CreateItem: React.FC<{}> = ({}) => {
    const router = useRouter();
    useIsAuth();
    const [createItem] = useCreateItemMutation();

    return (
        <SecondaryLayout>
            <Formik
                initialValues={{
                    category: '',
                    title: '',
                    description: '',
                    price: '',
                }}
                validationSchema={createValidations}
                onSubmit={async (values: CreateItemFields) => {
                    const { errors } = await createItem({
                        variables: { input: values },
                        update: (cache) => {
                            cache.evict({ fieldName: 'items:{}' });
                        },
                    });

                    if (!errors) router.push('/');
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <SelectField name="category" placeholder="Select category" label="Category" options={categoryList} />
                        <InputField name="title" placeholder="title" label="Title" />
                        <InputField name="price" placeholder="price" label="Price" />
                        <InputField name="description" placeholder="item description..." label="Description" isTextarea />
                        <Button type="submit" isLoading={isSubmitting} colorScheme="teal">
                            create item
                        </Button>
                    </Form>
                )}
            </Formik>
        </SecondaryLayout>
    );
};

export default withApollo({ ssr: false })(CreateItem);
