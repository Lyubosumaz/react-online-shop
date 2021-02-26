import { useLogoutMutation } from '@/generated/graphql';
import { useApolloClient } from '@apollo/client';
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';

const Logout: React.FC<{}> = ({ }) => {
    const [logout, { loading: logoutFetching }] = useLogoutMutation();
    const apolloClient = useApolloClient();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef<HTMLButtonElement>(null);

    return (
        <>
            <Button
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
                onClick={onOpen} isLoading={logoutFetching} variant="link"
            >
                Logout
            </Button>

            <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Logout?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>Are you sure you want to logout?</AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            No
                        </Button>

                        <Button
                            colorScheme="red"
                            ml={3}
                            onClick={async () => {
                                await logout();
                                await apolloClient.resetStore();
                            }}
                        >
                            Yes
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default Logout;
