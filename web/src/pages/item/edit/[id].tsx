import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { InputField } from '../../../components/InputField';
import MainLayout from '../../../components/layouts/MainLayout';
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
        <MainLayout variant="small">
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
