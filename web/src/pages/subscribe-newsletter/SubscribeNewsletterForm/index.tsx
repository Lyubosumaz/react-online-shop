import { useSubscribeNewsletterMutation } from '@/generated/graphql';
import { subscribeValidations } from '@/utils/formValidations';
import { Box, Button, FormControl, FormErrorMessage, Heading, Input } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';

const SubscribeNewsletterForm: React.FC<{}> = ({ }) => {
    const [subscribeNewsletter] = useSubscribeNewsletterMutation();

    return (
        <Box w="100%">
            <Heading mb={10} color="primaryL.700" fontSize="2.5rem">
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
                                        color="primaryL.700"
                                        _placeholder={{ color: 'primaryL.700' }}
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
                                backgroundColor="primaryL.700"
                                color="#fff"
                                fontWeight="normal"
                                textTransform="uppercase"
                                _hover={{ backgroundColor: 'transparent', color: 'primaryL.700', borderColor: 'primaryL.700' }}
                            >
                                subscribe now
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default SubscribeNewsletterForm;
