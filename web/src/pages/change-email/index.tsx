import { Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react';
import InputField from '../../components/form/InputField';
import { useChangeEmailMutation, useMeQuery } from '../../generated/graphql';
import MainWrapper from '../../layouts/MainWrapper';
import { changeEmailValidations } from '../../utils/formValidations';
import { isServer } from '../../utils/isServer';
import { withApollo } from '../../utils/withApollo';

const ChangeEmail: React.FC<{}> = ({}) => {
    const [changeEmail] = useChangeEmailMutation();
    const { data } = useMeQuery({
        skip: isServer(),
    });

    return (
        <MainWrapper size="small" variant="form">
            <Formik
                initialValues={{ oldEmail: '', newEmail: '', password: '' }}
                validationSchema={changeEmailValidations}
                onSubmit={async (values, { setErrors }) => {
                    const response = await changeEmail({
                        variables: {
                            ...values,
                            loggedUser: typeof data?.me?.id === 'number' ? data?.me?.id : -1,
                        },
                    });

                    console.log('change email: ', values, 'response: ', response);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <InputField name="oldEmail" placeholder="Old Email" label="Old Email" />
                        <InputField name="newEmail" placeholder="New Email" label="New Email" />
                        <InputField name="password" placeholder="password" label="Password" type="password" />
                        <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="teal">
                            change email
                        </Button>
                    </Form>
                )}
            </Formik>
        </MainWrapper>
    );
};

export default withApollo({ ssr: false })(ChangeEmail);
