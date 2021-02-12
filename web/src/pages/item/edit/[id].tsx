import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { categoryList } from '../../../category-list.json';
import InputField from '../../../components/form/InputField';
import SelectField from '../../../components/form/SelectField';
import { useItemQuery, useUpdateItemMutation } from '../../../generated/graphql';
import MainLayout from '../../../layouts/MainLayout';
import { createValidations } from '../../../utils/formValidations';
import { useGetIntId } from '../../../utils/useGetIntId';
import { withApollo } from '../../../utils/withApollo';

const EditItem = ({}) => {
    const router = useRouter();
    const intId = useGetIntId();
    const { data, loading } = useItemQuery({
        skip: intId === -1,
        variables: {
            id: intId,
        },
    });

    const [updateItem] = useUpdateItemMutation();
    if (loading) {
        return (
            <MainLayout>
                <div>loading...</div>
            </MainLayout>
        );
    }

    if (!data?.item) {
        return (
            <MainLayout>
                <Box>could not find item</Box>
            </MainLayout>
        );
    }

    return (
        <MainLayout size="small" variant="form">
            <Formik
                initialValues={{
                    category: data.item.category,
                    title: data.item.title,
                    description: data.item.description,
                    price: data.item.price.toString(),
                }}
                validationSchema={createValidations}
                onSubmit={async (values) => {
                    await updateItem({ variables: { id: intId, ...values } });
                    router.back();
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <SelectField name="category" placeholder="Select category" label="Category" options={categoryList} />
                        <InputField name="title" placeholder="title" label="Title" />
                        <InputField name="price" placeholder="price" label="Price" />
                        <InputField name="description" placeholder="item description..." label="Description" isTextarea />
                        <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="teal">
                            update item
                        </Button>
                    </Form>
                )}
            </Formik>
        </MainLayout>
    );
};

export default withApollo({ ssr: false })(EditItem);
