import { Box, Button, FormLabel, Select } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { InputField } from '../../components/form/InputField';
import { useCreateItemMutation } from '../../generated/graphql';
import MainLayout from '../../layouts/MainLayout';
import { useIsAuth } from '../../utils/useIsAuth';
import { withApollo } from '../../utils/withApollo';

const CreateItem: React.FC<{}> = ({}) => {
    const router = useRouter();
    useIsAuth();
    const [createItem] = useCreateItemMutation();

    const [selectCategory, setSelectCategory] = React.useState('');
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectCategory(event.target.value);
    };

    return (
        <MainLayout variant="small">
            <Formik
                initialValues={{ title: '', description: '', price: '' }}
                onSubmit={async (values) => {
                    const witchSelectFields = { ...values, category: selectCategory };
                    const { errors } = await createItem({
                        variables: { input: witchSelectFields },
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
                        <Box>
                            <FormLabel htmlFor="category">Category</FormLabel>
                            <Select value={selectCategory} onChange={handleChange} name="category" placeholder="Select category">
                                <option value="all">All</option>
                            </Select>
                        </Box>

                        <InputField name="title" placeholder="title" label="Title" />
                        <InputField name="price" placeholder="price" label="Price" />
                        <InputField name="description" placeholder="item description..." label="Description" isTextarea />

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
