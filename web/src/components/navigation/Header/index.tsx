import { useApolloClient } from '@apollo/client';
import { Box, Button, Flex, Heading, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { useLogoutMutation, useMeQuery } from '../../../generated/graphql';
import { isServer } from '../../../utils/isServer';

const Header: React.FC<{}> = ({}) => {
    const [logout, { loading: logoutFetching }] = useLogoutMutation();
    const apolloClient = useApolloClient();
    const { data } = useMeQuery({
        skip: isServer(),
    });

    return (
        <header style={{ backgroundColor: '#7c2c0c', color: '#fcfcfc' }}>
            <Flex zIndex={1} position="sticky" top={0} bg="tan" p={4}>
                <Flex flex={1} m="auto" align="center" maxW={800} backgroundColor="#7c2c0c">
                    <NextLink href="/">
                        <Link>
                            <Heading>LiReddit</Heading>
                        </Link>
                    </NextLink>
                    <Box ml={'auto'}>
                        {!data?.me ? (
                            <>
                                <NextLink href="/login">
                                    <Button as={Link} mr={4}>
                                        <Link mr={2}>login</Link>
                                    </Button>
                                </NextLink>
                                <NextLink href="/register">
                                    <Link>register</Link>
                                </NextLink>
                            </>
                        ) : (
                            <Flex align="center">
                                <NextLink href="/create-item">
                                    <Button as={Link} mr={4} textTransform="uppercase" backgroundColor="#7c2c0c" color="#efe4d1" _hover={{ backgroundColor: '#efe4d1', color: '#7c2c0c' }}>
                                        create item
                                    </Button>
                                </NextLink>
                                <Box mr={2}>Welcome {data.me.username}</Box>
                                <Button
                                    onClick={async () => {
                                        await logout();
                                        await apolloClient.resetStore();
                                    }}
                                    isLoading={logoutFetching}
                                    variant="link"
                                >
                                    logout
                                </Button>
                            </Flex>
                        )}
                    </Box>
                </Flex>
            </Flex>
        </header>
    );
};

export default Header;
