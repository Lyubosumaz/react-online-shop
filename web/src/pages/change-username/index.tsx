import { Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import InputField from '../../components/form/InputField';
import { MeDocument, MeQuery, useChangeUsernameMutation, useMeQuery } from '../../generated/graphql';
import MainWrapper from '../../layouts/MainWrapper';
import { changeUsernameValidations } from '../../utils/formValidations';
import { isServer } from '../../utils/isServer';
import { toErrorMap } from '../../utils/toErrorMap';
import { withApollo } from '../../utils/withApollo';

const ChangeUsername: React.FC<{}> = ({}) => {
    const router = useRouter();
    const [changeUsername] = useChangeUsernameMutation();
    const { data } = useMeQuery({
        skip: isServer(),
    });

    return (
        <MainWrapper size="small" variant="form">
            <Formik
                initialValues={{ oldUsername: '', newUsername: '', password: '' }}
                validationSchema={changeUsernameValidations}
                onSubmit={async (values, { setErrors }) => {
                    const response = await changeUsername({
                        variables: {
                            ...values,
                            loggedUser: typeof data?.me?.id === 'number' ? data?.me?.id : -1,
                        },
                        update: (cache, { data }) => {
                            if (data?.changeUsername?.errors) return;

                            cache.writeQuery<MeQuery>({
                                query: MeDocument,
                                data: {
                                    __typename: 'Query',
                                    me: data?.changeUsername?.user,
                                },
                            });
                            cache.evict({ fieldName: 'items:{}' });
                        },
                    });

                    if (response.data?.changeUsername.errors) {
                        setErrors(toErrorMap(response.data.changeUsername.errors));
                    } else if (response.data?.changeUsername) {
                        // worked
                        router.back();
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <InputField name="oldUsername" placeholder="Old Username" label="Old Username" />
                        <InputField name="newUsername" placeholder="New Username" label="New Username" />
                        <InputField name="password" placeholder="password" label="Password" type="password" />
                        <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="teal">
                            change username
                        </Button>
                    </Form>
                )}
            </Formik>
        </MainWrapper>
    );
};

export default withApollo({ ssr: false })(ChangeUsername);
