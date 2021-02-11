import { Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import * as Yup from 'yup';
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

    const [writtenPrice, setWrittenPrice] = React.useState('');
    const _selectPrice = (category: string) => {
        setWrittenPrice(category);
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
                initialValues={{ category: '', title: '', description: '' }}
                validationSchema={Yup.object({
                    category: Yup.string().required('required'),
                    title: Yup.string().max(15, 'Must be 15 characters or less').required('required'),
                    description: Yup.string().max(255, 'Must be 255 characters or less').required('required'),
                })}
                onSubmit={async (values: any) => {
                    const witchCallbackFields = { ...values, price: writtenPrice };
                    console.log('values: ', values, 'values++: ', witchCallbackFields);
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
                        <SelectField name="category" placeholder="Select category" label="Category" options={categoryList} />
                        <InputField name="title" placeholder="title" label="Title" />
                        <NumberField name="price" label="Price" callback={_selectPrice} />
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
