import { Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react';
import InputField from '../../components/form/InputField';
import MainWrapper from '../../layouts/MainWrapper';
import { changeEmailValidations } from '../../utils/formValidations';

const ChangeEmail: React.FC<{}> = ({}) => {
    return (
        <MainWrapper size="small" variant="form">
            <Formik
                initialValues={{ oldEmail: '', newEmail: '', password: '' }}
                validationSchema={changeEmailValidations}
                onSubmit={async (values, { setErrors }) => {
                    console.log('change email: ', values);
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

export default ChangeEmail;
