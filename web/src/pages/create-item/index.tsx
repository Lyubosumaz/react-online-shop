import { Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import InputField from '../../components/form/InputField';
import NumberField from '../../components/form/NumberField';
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

    const categoryList = [
        { value: 'all', text: 'All' },
        { value: 'gaming', text: 'Gaming' },
        { value: 'bookstore', text: 'Bookstore' },
        { value: 'music', text: 'Music' },
        { value: 'movies', text: 'Movies' },
        { value: 'merchandise', text: 'Merchandise' },
        { value: 'laptops', text: 'Laptops' },
        { value: 'computers', text: 'Computers' },
        { value: 'audio', text: 'Audio' },
        { value: 'hi-fi', text: 'Hi-Fi' },
        { value: 'mobile_devices', text: 'Mobile devices' },
        { value: 'tv', text: 'TV' },
        { value: 'monitors', text: 'Monitors' },
        { value: 'video', text: 'Video' },
        { value: 'toys', text: 'Toys' },
        { value: 'mother', text: 'Mother' },
        { value: 'baby', text: 'Baby' },
        { value: 'puzzles', text: 'Puzzles' },
        { value: 'games', text: 'Games' },
    ];

    return (
        <MainLayout size="small" variant="form">
            <Formik
                initialValues={{ title: '', description: '', price: '' }}
                onSubmit={async (values: any) => {
                    const witchSelectFields = { ...values, category: selectCategory };
                    console.log('values: ', values, 'values++: ', witchSelectFields);
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
                        <SelectField name="category" options={categoryList} placeholder="Select category" label="Category" callback={_selectCategory} />
                        <InputField name="title" placeholder="title" label="Title" />
                        <NumberField name="price" label="Price" />
                        <InputField name="description" placeholder="item description..." label="Description" isTextarea />
                        <Button type="submit" isLoading={isSubmitting} colorScheme="teal">
                            create item
                        </Button>
                    </Form>
                )}
            </Formik>
        </MainLayout>
    );
};

export default withApollo({ ssr: false })(CreateItem);
