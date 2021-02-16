import { Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import InputField from '../../components/form/InputField';
import { MeDocument, MeQuery, useRegisterMutation } from '../../generated/graphql';
import SecondaryLayout from '../../layouts/SecondaryLayout';
import { registerValidations } from '../../utils/formValidations';
import { toErrorMap } from '../../utils/toErrorMap';
import { withApollo } from '../../utils/withApollo';

const Register: React.FC<{}> = ({}) => {
    const router = useRouter();
    const [register] = useRegisterMutation();
    return (
        <SecondaryLayout>
            <Formik
                initialValues={{ email: '', username: '', password: '' }}
                validationSchema={registerValidations}
                onSubmit={async (values, { setErrors }) => {
                    const response = await register({
                        variables: { options: values },
                        update: (cache, { data }) => {
                            cache.writeQuery<MeQuery>({
                                query: MeDocument,
                                data: {
                                    __typename: 'Query',
                                    me: data?.register.user,
                                },
                            });
                        },
                    });

                    if (response.data?.register.errors) {
                        setErrors(toErrorMap(response.data.register.errors));
                    } else if (response.data?.register.user) {
                        // worked
                        router.push('/');
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <InputField name="username" placeholder="username" label="Username" />
                        <InputField name="email" placeholder="email" label="Email" />
                        <InputField name="password" placeholder="password" label="Password" type="password" />
                        <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="teal">
                            register
                        </Button>
                    </Form>
                )}
            </Formik>
        </SecondaryLayout>
    );
};

export default withApollo({ ssr: false })(Register);
