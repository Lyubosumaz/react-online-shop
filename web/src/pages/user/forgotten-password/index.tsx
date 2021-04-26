import { InputField } from '@/components/form/InputField';
import { useForgottenPasswordMutation } from '@/generated/graphql';
import { SecondaryLayout } from '@/layouts/SecondaryLayout';
import { forgottenPasswordValidations } from '@/utils/formValidations';
import { withApollo } from '@/utils/withApollo';
import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { FC, useState } from 'react';

const ForgottenPassword: FC<{}> = ({ }) => {
    const [complete, setComplete] = useState(false);
    const [forgottenPassword] = useForgottenPasswordMutation();

    return (
        <SecondaryLayout>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={forgottenPasswordValidations}
                onSubmit={async (values) => {
                    await forgottenPassword({ variables: values });
                    setComplete(true);
                }}
            >
                {({ isSubmitting }) =>
                    complete
                        ? (
                            <Box>if an account with that email exists, we sent you can email</Box>
                        )
                        : (
                            <Form>
                                <InputField name="email" placeholder="email" label="Email" />

                                <Button
                                    mt={4}
                                    type="submit"
                                    isLoading={isSubmitting}
                                    colorScheme="teal"
                                >forgot password</Button>
                            </Form>
                        )
                }
            </Formik>
        </SecondaryLayout>
    );
};

export default withApollo({ ssr: false })(ForgottenPassword);
