import { Box, Button } from '@chakra-ui/core';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { InputField } from '../../../components/InputField';
import { Layout } from '../../../components/Layout';
import { useItemQuery, useUpdateItemMutation } from '../../../generated/graphql';
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
            <Layout>
                <div>loading...</div>
            </Layout>
        );
    }

    if (!data?.item) {
        return (
            <Layout>
                <Box>could not find item</Box>
            </Layout>
        );
    }

    return (
        <Layout variant="small">
            <Formik
                initialValues={{ title: data.item.title, description: data.item.description }}
                onSubmit={async (values) => {
                    await updateItem({ variables: { id: intId, ...values } });
                    router.back();
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <InputField name="title" placeholder="title" label="Title" />
                        <Box mt={4}>
                            <InputField textarea name="description" placeholder="description..." label="Body" />
                        </Box>
                        <Button mt={4} type="submit" isLoading={isSubmitting} variantColor="teal">
                            update item
                        </Button>
                    </Form>
                )}
            </Formik>
        </Layout>
    );
};

export default withApollo({ ssr: false })(EditItem);
