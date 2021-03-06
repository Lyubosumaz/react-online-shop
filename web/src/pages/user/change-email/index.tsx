import { InputField } from '@/components/form/InputField';
import { MeDocument, MeQuery, useChangeEmailMutation, useMeQuery } from '@/generated/graphql';
import { SecondaryLayout } from '@/layouts/SecondaryLayout';
import { changeEmailValidations } from '@/utils/formValidations';
import { isServer } from '@/utils/isServer';
import { toErrorMap } from '@/utils/toErrorMap';
import { withApollo } from '@/utils/withApollo';
import { Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { FC } from 'react';

const ChangeEmail: FC<{}> = ({ }) => {
    const router = useRouter();
    const [changeEmail] = useChangeEmailMutation();
    const { data } = useMeQuery({ skip: isServer() });

    return (
        <SecondaryLayout>
            <Formik
                initialValues={{ oldEmail: '', newEmail: '', password: '' }}
                validationSchema={changeEmailValidations}
                onSubmit={async (values, { setErrors }) => {
                    const response = await changeEmail({
                        variables: {
                            ...values,
                            loggedUser: typeof data?.me?.id === 'number' ? data?.me?.id : -1,
                        },
                        update: (cache, { data }) => {
                            if (data?.changeEmail?.errors) return;

                            cache.writeQuery<MeQuery>({
                                query: MeDocument,
                                data: {
                                    __typename: 'Query',
                                    me: data?.changeEmail?.user,
                                },
                            });
                            cache.evict({});
                        },
                    });

                    if (response.data?.changeEmail.errors) {
                        setErrors(toErrorMap(response.data.changeEmail.errors));
                    } else if (response.data?.changeEmail) {
                        // worked
                        router.push('/profile');
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <InputField name="oldEmail" placeholder="Old Email" label="Old Email" />
                        <InputField name="newEmail" placeholder="New Email" label="New Email" />
                        <InputField name="password" placeholder="password" label="Password" type="password" />

                        <Button
                            mt={4}
                            type="submit"
                            isLoading={isSubmitting}
                            colorScheme="teal"
                        >change email</Button>
                    </Form>
                )}
            </Formik>
        </SecondaryLayout>
    );
};

export default withApollo({ ssr: false })(ChangeEmail);
