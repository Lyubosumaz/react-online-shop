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
        <Flex zIndex={1} position="sticky" top={0} bg="tan" p={4}>
            <Flex flex={1} m="auto" align="center" maxW={800}>
                <NextLink href="/">
                    <Link>
                        <Heading>LiReddit</Heading>
                    </Link>
                </NextLink>
                <Box ml={'auto'}>
                    {!data?.me ? (
                        <>
                            <NextLink href="/login">
                                <Link mr={2}>login</Link>
                            </NextLink>
                            <NextLink href="/register">
                                <Link>register</Link>
                            </NextLink>
                        </>
                    ) : (
                        <Flex align="center">
                            <NextLink href="/create-item">
                                <Button as={Link} mr={4}>
                                    create item
                                </Button>
                            </NextLink>
                            <Box mr={2}>{data.me.username}</Box>
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
    );
};

export default Header;
