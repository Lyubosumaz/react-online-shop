import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import InputField from '../../components/form/InputField';
import { useForgottenPasswordMutation } from '../../generated/graphql';
import MainWrapper from '../../layouts/MainWrapper';
import { forgottenPasswordValidations } from '../../utils/formValidations';
import { withApollo } from '../../utils/withApollo';

const ForgottenPassword: React.FC<{}> = ({}) => {
    const [complete, setComplete] = useState(false);
    const [forgottenPassword] = useForgottenPasswordMutation();

    return (
        <MainWrapper size="small" variant="form">
            <Formik
                initialValues={{ email: '' }}
                validationSchema={forgottenPasswordValidations}
                onSubmit={async (values) => {
                    await forgottenPassword({ variables: values });
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

export default withApollo({ ssr: false })(ForgottenPassword);
