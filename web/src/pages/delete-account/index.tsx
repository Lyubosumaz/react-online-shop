import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import InputField from '../../components/form/InputField';
import { useDeleteAccountMutation, useMeQuery } from '../../generated/graphql';
import MainWrapper from '../../layouts/MainWrapper';
import { deleteAccountValidations } from '../../utils/formValidations';
import { isServer } from '../../utils/isServer';
import { toErrorMap } from '../../utils/toErrorMap';
import { withApollo } from '../../utils/withApollo';

const DeleteAccount: React.FC<{}> = ({}) => {
    const [complete, setComplete] = useState(false);
    const { data } = useMeQuery({
        skip: isServer(),
    });
    const [deleteAccount] = useDeleteAccountMutation();

    return (
        <MainWrapper size="small" variant="form">
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={deleteAccountValidations}
                onSubmit={async (values, { setErrors }) => {
                    const response = await deleteAccount({
                        variables: {
                            ...values,
                            loggedUser: typeof data?.me?.id === 'number' ? data?.me?.id : -1,
                        },
                    });

                    if (response.data?.deleteAccount.errors) {
                        setErrors(toErrorMap(response.data.deleteAccount.errors));
                    } else if (response.data?.deleteAccount.user) {
                        // worked
                        setComplete(true);
                    }
                }}
            >
                {({ isSubmitting }) =>
                    complete ? (
                        <Box>if an account with that email exists, we sent you can email</Box>
                    ) : (
                        <Form>
                            <InputField name="email" placeholder="email" label="Email" type="email" />
                            <InputField name="password" placeholder="password" label="Password" type="password" />
                            <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="teal">
                                forgot password
                            </Button>
                        </Form>
                    )
                }
            </Formik>
        </MainWrapper>
    );
};

export default withApollo({ ssr: false })(DeleteAccount);
