import { Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import * as Yup from 'yup';
import InputField from '../../components/form/InputField';
import SelectField from '../../components/form/SelectField';
import { useCreateItemMutation } from '../../generated/graphql';
import MainLayout from '../../layouts/MainLayout';
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

    // const [writtenPrice, setWrittenPrice] = React.useState('');
    // const _selectPrice = (category: string) => {
    //     setWrittenPrice(category);
    // };

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
                initialValues={{ category: '', title: '', description: '', price: '' }}
                validationSchema={Yup.object({
                    category: Yup.string().required('is required'),
                    title: Yup.string().max(15, 'must be 15 characters or less').required('is required'),
                    description: Yup.string().max(255, 'must be 255 characters or less').required('is required'),
                    price: Yup.number().typeError('needs a correct number').min(0.05, 'must be $0.05 or greater').required('is required'),
                })}
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
        </MainLayout>
    );
};

export default withApollo({ ssr: false })(CreateItem);
