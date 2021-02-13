import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import InputField from '../../components/form/InputField';
import { useDeleteUserMutation, useMeQuery } from '../../generated/graphql';
import MainWrapper from '../../layouts/MainWrapper';
import { emailValidations } from '../../utils/formValidations';
import { isServer } from '../../utils/isServer';
import { withApollo } from '../../utils/withApollo';

const DeleteAccount: React.FC<{}> = ({}) => {
    const [complete, setComplete] = useState(false);
    const { data } = useMeQuery({
        skip: isServer(),
    });
    const [deleteUser] = useDeleteUserMutation();

    return (
        <MainWrapper size="small" variant="form">
            <Formik
                initialValues={{ email: '' }}
                validationSchema={emailValidations}
                onSubmit={async (values) => {
                    await deleteUser({
                        variables: {
                            ...values,
                            loggedUser: typeof data?.me?.id === 'number' ? data?.me?.id : -1,
                        },
                    });
                    setComplete(true);
                }}
            >
                {({ isSubmitting }) =>
                    complete ? (
                        <Box>if an account with that email exists, we sent you can email</Box>
                    ) : (
                        <Form>
                            <InputField name="email" placeholder="email" label="Email" type="email" />
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
