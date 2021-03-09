import { MeDocument, MeQuery, useMeQuery, useSubscribeNewsletterMutation, useUnsubscribeNewsletterMutation } from '@/generated/graphql';
import { subscribeValidations } from '@/utils/formValidations';
import { isServer } from '@/utils/isServer';
import { Box, Button, FormControl, FormErrorMessage, Heading, Input, Text } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';

const SubscribeNewsletterForm: React.FC<{}> = ({ }) => {
    const { data } = useMeQuery({ skip: isServer() });
    const [subscribeNewsletter] = useSubscribeNewsletterMutation();
    const [unsubscribeNewsletter] = useUnsubscribeNewsletterMutation();

    return (
        <Box as="section" w="100%">
            <Heading mb={10} color="primaryL.700" fontSize="2.5rem">
                Subscribe Newsletter
            </Heading>

            {data?.me?.newsletterSub === 1
                ? (
                    <>
                        <Text mb="1.5rem">You are already subscribed and would reserve newsletter updates on your email address</Text>
                        <Text mb="1.5rem">If you don't want to receive the newsletter you can unsubscribe:</Text>

                        <Box d="flex" justifyContent="center">
                            <Button
                                ml="0.5rem"
                                p="0 4rem"
                                borderWidth="0.1rem"
                                borderRadius={0}
                                backgroundColor="primaryL.700"
                                color="white"
                                fontWeight="normal"
                                textTransform="uppercase"
                                _hover={{ backgroundColor: 'transparent', color: 'primaryL.700', borderColor: 'primaryL.700' }}
                                onClick={async () =>
                                    await unsubscribeNewsletter({
                                        variables: {
                                            email: typeof data?.me?.email === 'string' ? data?.me?.email : '-1',
                                        },
                                        update: (cache, { data }) => {
                                            if (typeof data?.unsubscribeNewsletter === 'boolean') return;

                                            if (data?.unsubscribeNewsletter?.errors) return;

                                            cache.writeQuery<MeQuery>({
                                                query: MeDocument,
                                                data: {
                                                    __typename: 'Query',
                                                    me: data?.unsubscribeNewsletter?.user,
                                                },
                                            });
                                            cache.evict({});
                                        },
                                    })
                                }
                            >
                                unsubscribe
                            </Button>
                        </Box>
                    </>
                )
                : (
                    <Formik
                        initialValues={{ email: '' }}
                        validationSchema={subscribeValidations}
                        onSubmit={async (values, { resetForm }) => {
                            async () =>
                                await subscribeNewsletter({
                                    variables: values,
                                    update: (cache, { data }) => {
                                        if (typeof data?.subscribeNewsletter === 'boolean') return;

                                        if (data?.subscribeNewsletter?.errors) return;

                                        cache.writeQuery<MeQuery>({
                                            query: MeDocument,
                                            data: {
                                                __typename: 'Query',
                                                me: data?.subscribeNewsletter?.user,
                                            },
                                        });
                                        cache.evict({});
                                    },
                                })

                            // await subscribeNewsletter({ variables: values });
                            resetForm();
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form style={{ width: '100%' }}>
                                <Field name="email">
                                    {({ field, form }: any) => (
                                        <FormControl mb={8} isInvalid={!!form.errors.email}>
                                            <Input
                                                {...field}
                                                placeholder="Enter Your Email"
                                                fontSize="xl"
                                                p="1.6rem 1rem"
                                                borderRadius={0}
                                                borderColor="#8b4222"
                                                color="primaryL.700"
                                                _placeholder={{ color: 'primaryL.700' }}
                                                _hover={{ borderColor: '#8b4222' }}
                                                _focus={{ borderColor: '#8b4222' }}
                                            />
                                            {form.errors.email ? (
                                                <FormErrorMessage pl="1.1rem" fontSize="1.1rem">Email {form.errors.email}</FormErrorMessage>
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
                )}
        </Box >
    );
};

export default SubscribeNewsletterForm;
