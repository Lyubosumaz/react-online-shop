import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { InputField } from '../components/InputField';
import MainLayout from '../components/layouts/MainLayout';
import { useCreateItemMutation } from '../generated/graphql';
import { useIsAuth } from '../utils/useIsAuth';
import { withApollo } from '../utils/withApollo';

const CreateItem: React.FC<{}> = ({}) => {
    const router = useRouter();
    useIsAuth();
    const [createItem] = useCreateItemMutation();
    return (
        <MainLayout variant="small">
            <Formik
                initialValues={{ title: '', description: '' }}
                onSubmit={async (values) => {
                    const { errors } = await createItem({
                        variables: { input: values },
                        update: (cache) => {
                            cache.evict({ fieldName: 'items:{}' });
                        },
                    });
                    if (!errors) {
                        router.push('/');
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <InputField name="title" placeholder="title" label="Title" />
                        <Box mt={4}>
                            <InputField textarea name="description" placeholder="description..." label="Body" />
                        </Box>
                        <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="teal">
                            create item
                        </Button>
                    </Form>
                )}
            </Formik>
        </MainLayout>
    );
};

export default withApollo({ ssr: false })(CreateItem);
