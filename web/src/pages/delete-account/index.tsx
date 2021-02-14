import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import InputField from '../../components/form/InputField';
import { useDeleteAccountMutation, useMeQuery } from '../../generated/graphql';
import MainWrapper from '../../layouts/MainWrapper';
import { deleteAccountValidations } from '../../utils/formValidations';
import { isServer } from '../../utils/isServer';
import { toErrorMap } from '../../utils/toErrorMap';
import { withApollo } from '../../utils/withApollo';

const DeleteAccount: React.FC<{}> = ({}) => {
    const formRef = useRef<any>(null);
    const router = useRouter();
    const { data } = useMeQuery({
        skip: isServer(),
    });
    const [deleteAccount] = useDeleteAccountMutation();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef<HTMLButtonElement>(null);

    const handleSubmit = () => {
        if (formRef.current) {
            formRef.current.handleSubmit();
        }
    };

    return (
        <MainWrapper size="small" variant="form">
            <Formik
                innerRef={formRef}
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
                    } else if (response.data?.deleteAccount) {
                        // worked
                        router.push('/');
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <InputField name="email" placeholder="email" label="Email" type="email" />
                        <InputField name="password" placeholder="password" label="Password" type="password" />
                        <Button mt={4} isLoading={isSubmitting} onClick={onOpen} colorScheme="teal">
                            forgot password
                        </Button>

                        <AlertDialog motionPreset="slideInBottom" leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
                            <AlertDialogOverlay />

                            <AlertDialogContent>
                                <AlertDialogHeader>Delete your account?</AlertDialogHeader>
                                <AlertDialogCloseButton />
                                <AlertDialogBody>Do you really want to delete your account?</AlertDialogBody>
                                <AlertDialogFooter>
                                    <Button ref={cancelRef} onClick={onClose}>
                                        No
                                    </Button>
                                    <Button colorScheme="red" ml={3} onClick={handleSubmit}>
                                        Yes
                                    </Button>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </Form>
                )}
            </Formik>
        </MainWrapper>
    );
};

export default withApollo({ ssr: false })(DeleteAccount);
