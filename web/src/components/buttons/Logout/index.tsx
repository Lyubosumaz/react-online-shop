import { useLogoutMutation } from '@/generated/graphql';
import { useApolloClient } from '@apollo/client';
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react';
import React, { FC, useRef } from 'react';

const Logout: FC<{}> = ({ }) => {
    const [logout, { loading: logoutFetching }] = useLogoutMutation();
    const apolloClient = useApolloClient();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef<HTMLButtonElement>(null);

    const handleLogout = async () => {
        await logout();
        await apolloClient.resetStore();
    }

    return (
        <>
            <Button
                key="logout_button"
                height="2.5rem"
                padding="0 1rem"
                textTransform="uppercase"
                bgColor="inherit"
                color="secondaryL.100"
                _hover={{
                    bgColor: 'secondaryL.100',
                    color: 'primaryL.700',
                    textDecoration: 'underline'
                }}
                onClick={onOpen} isLoading={logoutFetching}
                variant="link"
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

export default Logout;
