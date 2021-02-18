import { Box, Button, Flex, Heading, Image, Input } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { subscribeValidations } from '../../utils/formValidations';
import { withApollo } from '../../utils/withApollo';

const SubscribeNewsletter: React.FC<{}> = ({}) => {
    return (
        <MainLayout>
            <Flex>
                <Box padding="0 1rem" flexBasis="50%">
                    <Image boxSize="30rem" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
                </Box>

                <Box padding="0 1rem" flexBasis="50%">
                    <Heading mb={10} color="#7c2c0c" fontSize="2.5rem">
                        Subscribe Newsletter
                    </Heading>
                    <Formik
                        initialValues={{ email: '' }}
                        validationSchema={subscribeValidations}
                        onSubmit={async (values, { setErrors }) => {
                            console.log(values);
                            // const response = await changePassword({
                            //     variables: values,
                            //     // update: (cache, { data }) => {
                            //     //     cache.writeQuery<MeQuery>({
                            //     //         query: MeDocument,
                            //     //         data: {
                            //     //             __typename: 'Query',
                            //     //             me: data?.changePassword.user,
                            //     //         },
                            //     //     });
                            //     // },
                            // });

                            // if (response.data?.changePassword.errors) {
                            //     const errorMap = toErrorMap(response.data.changePassword.errors);
                            //     if ('token' in errorMap) {
                            //         setTokenError(errorMap.token);
                            //     }
                            //     setErrors(errorMap);
                            // } else if (response.data?.changePassword.user) {
                            //     // worked
                            //     router.push('/profile');
                            // }
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form style={{ width: '100%' }}>
                                <Input
                                    placeholder="Enter Your Email"
                                    fontSize="xl"
                                    // styles
                                    p="1.5rem 1.2rem"
                                    borderRadius={0}
                                    borderColor="#8b4222"
                                    color="#7c2c0c"
                                    _placeholder={{ color: '#7c2c0c' }}
                                    _hover={{ borderColor: '#8b4222' }}
                                    _focus={{ borderColor: '#8b4222' }}
                                />

                                <Box mt={8} d="flex" justifyContent="center">
                                    <Button
                                        type="submit"
                                        isLoading={isSubmitting}
                                        // styles
                                        p="0 5rem"
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
            </Flex>
        </MainLayout>
    );
};

export default withApollo({ ssr: true })(SubscribeNewsletter);
