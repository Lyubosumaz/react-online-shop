import { useLogoutMutation } from '@/generated/graphql';
import { useApolloClient } from '@apollo/client';
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure, useStyleConfig } from '@chakra-ui/react';
import { FC, useRef } from 'react';

export const Logout: FC<{}> = ({ }) => {
    const [logout, { loading: logoutFetching }] = useLogoutMutation();
    const apolloClient = useApolloClient();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef<HTMLButtonElement>(null);
    const logoutButtonStyles = useStyleConfig("LogoutButtons");

    const handleLogout = async () => {
        await logout();
        await apolloClient.resetStore();
    }

    return (
        <>
            <Button
                onClick={onOpen}
                isLoading={logoutFetching}
                sx={logoutButtonStyles}
            >Logout</Button>

            <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Logout?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>Are you sure you want to logout?</AlertDialogBody>

                    <AlertDialogFooter>
                        <Button
                            ref={cancelRef}
                            onClick={onClose}
                        >No</Button>

                        <Button
                            ml={3}
                            colorScheme="red"
                            onClick={() => handleLogout()}
                        >Yes</Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};
