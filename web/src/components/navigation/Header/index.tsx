import { useApolloClient } from '@apollo/client';
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Flex, IconButton, Link, Text, useColorModeValue, useDisclosure, useToken } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useLogoutMutation, useMeQuery } from '../../../generated/graphql';
import MainWrapper from '../../../layouts/MainWrapper';
import { isServer } from '../../../utils/isServer';
import ColorMode from '../../buttons/ColorMode';
import Logo from '../../Logo';

const HeaderNavItem: React.FC<{ href: string }> = ({ children, href }) => (
    <NextLink href={href}>
        <Button
            as={Link}
            mr={4}
            textTransform="uppercase"
            backgroundColor="primaryL.700"
            _hover={{
                backgroundColor: 'secondaryL.200',
                color: 'primaryL.700'
            }}
        >
            {children}
        </Button>
    </NextLink>
);

const Header: React.FC<{}> = ({ }) => {
    const [lightBgColor, darkBgColor, lightTxColor, darkTxColor] = useToken("colors", ["rosHeader.200", "rosHeader.900", "rosHeader.100", "rosHeader.800"]);
    const bgColor = useColorModeValue(lightBgColor, darkBgColor);
    const txColor = useColorModeValue(lightTxColor, darkTxColor);
    const [logout, { loading: logoutFetching }] = useLogoutMutation();
    const apolloClient = useApolloClient();
    const { data } = useMeQuery({
        skip: isServer(),
    });
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef<HTMLButtonElement>(null);

    return (
        // <header
        //     style={{
        //         padding: '0.5rem 0',
        //         position: 'static',
        //         top: 0,
        //         backgroundColor: '#7c2c0c',
        //         color: '#efe4d1',
        //         borderTop: '1rem solid #efe4d1',
        //         borderBottom: '1rem solid #efe4d1',
        //         zIndex: 1
        //     }}
        // >
        <Box
            p=".5rem 0"
            position="static"
            top="0"
            bgColor={bgColor}
            color={txColor}
            borderTop="1rem solid"
            borderBottom="1rem solid"
            borderColor=""
        >
                
            <MainWrapper>
                <Flex flex={1} align="center" >
                    <Logo />

                    <Flex ml={'auto'} alignItems="center">
                        {!data?.me ? (
                            <>
                                <HeaderNavItem href="/login">Login</HeaderNavItem>
                                <HeaderNavItem href="/register">Register</HeaderNavItem>
                            </>
                        ) : (
                                <Flex align="center">
                                    <HeaderNavItem href="/create-item">Create Item</HeaderNavItem>
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
                                        mr={4}
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
                                </Flex>
                            )}
                        <ColorMode control="custom" />
                        {/* TODO button for translate site */}
                    </Flex>
                </Flex>
            </MainWrapper>
        </Box>
        // </header>
    );
};

export default Header;
