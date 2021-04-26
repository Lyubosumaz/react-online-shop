import { InputField } from '@/components/form/InputField';
import { MeDocument, MeQuery, useLoginMutation } from '@/generated/graphql';
import { SecondaryLayout } from '@/layouts/SecondaryLayout';
import { loginValidations } from '@/utils/formValidations';
import { toErrorMap } from '@/utils/toErrorMap';
import { withApollo } from '@/utils/withApollo';
import { Button, Flex, Link } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Login: React.FC<{}> = ({ }) => {
    const router = useRouter();
    const [login] = useLoginMutation();

    return (
        <SecondaryLayout>
            <Formik
                initialValues={{ usernameOrEmail: '', password: '' }}
                validationSchema={loginValidations}
                onSubmit={async (values, { setErrors }) => {
                    const response = await login({
                        variables: values,
                        update: (cache, { data }) => {
                            cache.writeQuery<MeQuery>({
                                query: MeDocument,
                                data: {
                                    __typename: 'Query',
                                    me: data?.login.user,
                                },
                            });
                            cache.evict({});
                        },
                    });
                    if (response.data?.login.errors) {
                        setErrors(toErrorMap(response.data.login.errors));
                    } else if (response.data?.login.user) {
                        if (typeof router.query.next === 'string') {
                            router.push(router.query.next);
                        } else {
                            // worked
                            router.push('/');
                        }
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <InputField name="usernameOrEmail" placeholder="username or email" label="Username or Email" />
                        <InputField name="password" placeholder="password" label="Password" type="password" />
                        <Flex mt={2}>
                            <NextLink href="/forgotten-password">
                                <Link ml="auto">forgot password?</Link>
                            </NextLink>
                        </Flex>
                        <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="teal">
                            login
                        </Button>
                    </Form>
                )}
            </Formik>
        </SecondaryLayout>
    );
};

export default withApollo({ ssr: false })(Login);
