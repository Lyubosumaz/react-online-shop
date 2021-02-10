import { Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { InputField } from '../../components/form/InputField';
import SelectField from '../../components/form/SelectField';
import { useCreateItemMutation } from '../../generated/graphql';
import MainLayout from '../../layouts/MainLayout';
import { useIsAuth } from '../../utils/useIsAuth';
import { withApollo } from '../../utils/withApollo';

const CreateItem: React.FC<{}> = ({}) => {
    const router = useRouter();
    useIsAuth();
    const [createItem] = useCreateItemMutation();
    const [selectCategory, setSelectCategory] = React.useState('');
    const _selectCategory = (category: string) => {
        setSelectCategory(category);
    };

    return (
        <MainLayout variant="small">
            <Formik
                initialValues={{ title: '', description: '', price: '' }}
                onSubmit={async (values: any) => {
                    const witchSelectFields = { ...values, category: selectCategory };
                    console.log(witchSelectFields);
                    // const { errors } = await createItem({
                    //     variables: { input: witchSelectFields },
                    //     update: (cache) => {
                    //         cache.evict({ fieldName: 'items:{}' });
                    //     },
                    // });
                    // if (!errors) {
                    //     router.push('/');
                    // }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        {/* <FormControl isInvalid={!!error}>
                            <FormLabel htmlFor="category">Category</FormLabel>
                            <Select value={selectCategory} onChange={handleChange} name="category" placeholder="Select category">
                                <option value="all">All</option>
                            </Select>
                            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
                        </FormControl> */}
                        <SelectField callback={_selectCategory} />
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
