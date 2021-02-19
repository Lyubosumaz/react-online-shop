import { Box, Button, Flex, FormControl, FormErrorMessage, Heading, Image, Input } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useSubscribeNewsletterMutation } from '../../generated/graphql';
import MainLayout from '../../layouts/MainLayout';
import { subscribeValidations } from '../../utils/formValidations';
import { withApollo } from '../../utils/withApollo';

const Column: React.FC<{}> = ({ children }) => (
    <Flex padding="0 1rem" justifyContent="center" alignItems="center" flexBasis="50%">
        {children}
    </Flex>
);

const SubscribeNewsletter: React.FC<{}> = ({}) => {
    const [subscribeNewsletter] = useSubscribeNewsletterMutation();

    return (
        <Box backgroundColor="#fdebcb">
            <MainLayout>
                <Flex p="6rem 0">
                    <Column>
                        <Image w="100%" h="auto" src={require('../../images/img-6.png')} alt="Garden Sofa" />
                    </Column>

                    <Column>
                        <Box w="100%">
                            <Heading mb={10} color="#7c2c0c" fontSize="2.5rem">
                                Subscribe Newsletter
                            </Heading>
                            <Formik
                                initialValues={{ email: '' }}
                                validationSchema={subscribeValidations}
                                onSubmit={async (values, { resetForm }) => {
                                    await subscribeNewsletter({ variables: values });
                                    resetForm();
                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form style={{ width: '100%' }}>
                                        <Field name="email">
                                            {({ field, form }: any) => (
                                                <FormControl mb={8} isInvalid={!!form.errors.email && !!form.touched.email}>
                                                    <Input
                                                        {...field}
                                                        placeholder="Enter Your Email"
                                                        fontSize="xl"
                                                        // styles
                                                        p="1.6rem 1rem"
                                                        borderRadius={0}
                                                        borderColor="#8b4222"
                                                        color="#7c2c0c"
                                                        _placeholder={{ color: '#7c2c0c' }}
                                                        _hover={{ borderColor: '#8b4222' }}
                                                        _focus={{ borderColor: '#8b4222' }}
                                                    />
                                                    {form.errors.email ? (
                                                        <FormErrorMessage fontSize="1.1rem">Email {form.errors.email}</FormErrorMessage>
                                                    ) : (
                                                        <Box mt={2} fontSize="1.1rem" visibility="hidden" color="transparent">
                                                            placeholder
                                                        </Box>
                                                    )}
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Box mt={8} d="flex" justifyContent="center">
                                            <Button
                                                type="submit"
                                                isLoading={isSubmitting}
                                                // styles
                                                p="0 4rem"
                                                borderWidth="0.1rem"
                                                borderRadius={0}
                                                backgroundColor="#7c2c0c"
                                                color="#fff"
                                                fontWeight="normal"
                                                textTransform="uppercase"
                                                _hover={{ backgroundColor: 'transparent', color: '#7c2c0c', borderColor: '#7c2c0c' }}
                                            >
                                                subscribe now
                                            </Button>
                                        </Box>
                                    </Form>
                                )}
                            </Formik>
                        </Box>
                    </Column>
                </Flex>
            </MainLayout>
        </Box>
    );
};

export default withApollo({ ssr: true })(SubscribeNewsletter);
