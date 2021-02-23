import { useApolloClient } from '@apollo/client';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    Flex,
    IconButton,
    Link,
    List,
    ListItem,
    Text,
    useDisclosure
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useLogoutMutation, useMeQuery } from '../../../generated/graphql';
import { isServer } from '../../../utils/isServer';
import ColorMode from '../../buttons/ColorMode';

interface NavItemProps {
    href: string,

}

const NavItem: React.FC<NavItemProps> = ({ children, href }) => {
    return (
        <ListItem>
            <NextLink href={href}>
                <Button
                    as={Link}
                    mr={4}
                    textTransform="uppercase"
                    bgColor="inherit"
                    _hover={{
                        backgroundColor: 'secondaryL.200',
                        color: 'primaryL.700'
                    }}
                >
                    {children}
                </Button>
            </NextLink>
        </ListItem>
    )
};

const NavBar: React.FC<{}> = ({ }) => {
    const [logout, { loading: logoutFetching }] = useLogoutMutation();
    const apolloClient = useApolloClient();
    const { data } = useMeQuery({ skip: isServer() });
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef<HTMLButtonElement>(null);

    return (
        <List>
            <Flex ml={'auto'} alignItems="center">
                {!data?.me ? (
                    <>
                        <List>
                            <NavItem href="/login">Login</NavItem>
                            <NavItem href="/register">Register</NavItem>
                        </List>
                    </>
                ) : (
                        <List d="flex">
                            <NavItem href="/create-item">Create Item</NavItem>

                            <Flex mr={4} alignItems="center">
                                <Text mr={2} fontWeight="bold">Welcome:</Text>

                                <NextLink href="/profile">
                                    <Button as={Link}
                                        p="0 0.75em"
                                        textTransform="uppercase"
                                        backgroundColor="primaryL.700"
                                        _hover={{
                                            backgroundColor: 'secondaryL.100',
                                            color: 'primaryL.700'
                                        }}
                                    >
                                        {data.me.username}
                                    </Button>
                                </NextLink>
                            </Flex>

                            <NextLink href="/cart">
                                <IconButton
                                    mr={4}
                                    aria-label="Cart"
                                    icon={<FaShoppingCart />}
                                    backgroundColor="primaryL.700"
                                    _hover={{
                                        backgroundColor: 'secondaryL.100',
                                        color: 'primaryL.700'
                                    }}
                                />
                            </NextLink>

                            <Button

                                height="2.5rem"
                                padding="0 1rem"
                                textTransform="uppercase"
                                backgroundColor="primaryL.700"
                                color="secondaryL.100"
                                _hover={{
                                    backgroundColor: 'secondaryL.100',
                                    color: 'primaryL.700',
                                    textDecoration: 'underline'
                                }}
                                onClick={onOpen} isLoading={logoutFetching} variant="link">
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
                        </List>
                    )}
                <ColorMode control="custom" />
                {/* TODO button for translate site */}
            </Flex>
        </List>
    );
};

export default NavBar;
