import InputField from '@/components/form/InputField';
import { MeDocument, MeQuery, useChangePasswordMutation } from '@/generated/graphql';
import SecondaryLayout from '@/layouts/SecondaryLayout';
import { changePasswordValidations } from '@/utils/formValidations';
import { toErrorMap } from '@/utils/toErrorMap';
import { withApollo } from '@/utils/withApollo';
import { Box, Button, Flex, Link } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const ChangePassword: NextPage = () => {
    const router = useRouter();
    const [changePassword] = useChangePasswordMutation();
    const [tokenError, setTokenError] = useState('');

    return (
        <SecondaryLayout goBackButton="hidden">
            <Formik
                initialValues={{ newPassword: '' }}
                validationSchema={changePasswordValidations}
                onSubmit={async (values, { setErrors }) => {
                    const response = await changePassword({
                        variables: {
                            newPassword: values.newPassword,
                            token: typeof router.query.token === 'string' ? router.query.token : '',
                        },
                        update: (cache, { data }) => {
                            cache.writeQuery<MeQuery>({
                                query: MeDocument,
                                data: {
                                    __typename: 'Query',
                                    me: data?.changePassword.user,
                                },
                            });
                        },
                    });
                    if (response.data?.changePassword.errors) {
                        const errorMap = toErrorMap(response.data.changePassword.errors);
                        if ('token' in errorMap) {
                            setTokenError(errorMap.token);
                        }
                        setErrors(errorMap);
                    } else if (response.data?.changePassword.user) {
                        // worked
                        router.push('/profile');
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <InputField name="newPassword" placeholder="new password" label="New Password" type="password" />
                        {tokenError ? (
                            <Flex>
                                <Box mr={2} style={{ color: 'red' }}>
                                    {tokenError}
                                </Box>
                                <NextLink href="/forgotten-password">
                                    <Link>click here to get a new one</Link>
                                </NextLink>
                            </Flex>
                        ) : null}
                        <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="teal">
                            change password
                        </Button>
                    </Form>
                )}
            </Formik>
        </SecondaryLayout>
    );
};

export default withApollo({ ssr: false })(ChangePassword);
