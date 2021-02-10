import { useApolloClient } from '@apollo/client';
import { Box, Button, Flex, Icon, IconButton, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaShoppingCart, FaStore } from 'react-icons/fa';
import { useLogoutMutation, useMeQuery } from '../../../generated/graphql';
import MainWrapper from '../../../layouts/MainWrapper';
import { isServer } from '../../../utils/isServer';

const FooterNavItem: React.FC<{ href: string }> = ({ children, href, ...rest }) => (
    <NextLink href={href}>
        <Button as={Link} mr={4} textTransform="uppercase" backgroundColor="#7c2c0c" _hover={{ backgroundColor: '#efe4d1', color: '#7c2c0c' }}>
            {children}
        </Button>
    </NextLink>
);

const Header: React.FC<{}> = ({}) => {
    const [logout, { loading: logoutFetching }] = useLogoutMutation();
    const apolloClient = useApolloClient();
    const { data } = useMeQuery({
        skip: isServer(),
    });

    return (
        <header style={{ padding: '0.5rem 0', position: 'static', top: 0, backgroundColor: '#7c2c0c', color: '#efe4d1', borderTop: '1rem solid #efe4d1', borderBottom: '1rem solid #efe4d1', zIndex: 1 }}>
            <MainWrapper>
                <Flex flex={1} align="center" backgroundColor="#7c2c0c">
                    <NextLink href="/">
                        <Link p={2} display="flex" alignItems="center" border="0.175rem solid transparent" borderRadius={8} _hover={{ borderColor: '#fcfcfc', color: '#fcfcfc' }}>
                            <Icon as={FaStore} w={8} h={8} />
                            <Text fontSize="2.5rem" fontWeight="700" lineHeight={1}>
                                ROS
                            </Text>
                        </Link>
                    </NextLink>
                    <Box ml={'auto'}>
                        {!data?.me ? (
                            <>
                                <FooterNavItem href="/login">Login</FooterNavItem>
                                <FooterNavItem href="/login">Register</FooterNavItem>
                            </>
                        ) : (
                            <Flex align="center">
                                <FooterNavItem href="/create-item">Create Item</FooterNavItem>
                                <FooterNavItem href="/forgotten-password">Recover Password</FooterNavItem>
                                <Flex mr={4} alignItems="center">
                                    <Text mr={2} fontWeight="bold">
                                        Welcome:
                                    </Text>
                                    <NextLink href="/profile">
                                        <Button as={Link} p="0 0.75em" textTransform="uppercase" backgroundColor="#7c2c0c" _hover={{ backgroundColor: '#efe4d1', color: '#7c2c0c' }}>
                                            {data.me.username}
                                        </Button>
                                    </NextLink>
                                </Flex>
                                <NextLink href="/cart">
                                    <IconButton mr={4} aria-label="Cart" icon={<FaShoppingCart />} backgroundColor="#7c2c0c" _hover={{ backgroundColor: '#efe4d1', color: '#7c2c0c' }} />
                                </NextLink>
                                <Button
                                    height="2.5rem"
                                    padding="0 1rem"
                                    textTransform="uppercase"
                                    backgroundColor="#7c2c0c"
                                    color="#efe4d1"
                                    _hover={{ backgroundColor: '#efe4d1', color: '#7c2c0c', textDecoration: 'underline' }}
                                    onClick={async () => {
                                        await logout();
                                        await apolloClient.resetStore();
                                    }}
                                    isLoading={logoutFetching}
                                    variant="link"
                                >
                                    Logout
                                </Button>
                            </Flex>
                        )}
                    </Box>
                </Flex>
            </MainWrapper>
        </header>
    );
};

export default Header;
