import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { InputField } from '../../components/InputField';
import { useForgotPasswordMutation } from '../../generated/graphql';
import MainWrapper from '../../layouts/MainWrapper';
import { withApollo } from '../../utils/withApollo';

const ForgotPassword: React.FC<{}> = ({}) => {
    const [complete, setComplete] = useState(false);
    const [forgotPassword] = useForgotPasswordMutation();
    return (
        <MainWrapper variant="small">
            <Formik
                initialValues={{ email: '' }}
                onSubmit={async (values) => {
                    await forgotPassword({ variables: values });
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

export default withApollo({ ssr: false })(ForgotPassword);
