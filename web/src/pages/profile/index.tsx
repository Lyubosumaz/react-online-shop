import {
    MeDocument,
    MeQuery,
    useConfirmEmailMessageMutation,
    useMeQuery,
    useSubscribeNewsletterMutation,
    useUnsubscribeNewsletterMutation
} from '@/generated/graphql';
import MainLayout from '@/layouts/MainLayout';
import { isServer } from '@/utils/isServer';
import { withApollo } from '@/utils/withApollo';
import { Button, Icon, IconButton, List, ListItem, Text, Tooltip } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useState } from 'react';
import {
    FaAddressCard,
    FaBell,
    FaBellSlash,
    FaEdit,
    FaEnvelope,
    FaLock,
    FaLockOpen,
    FaTrashAlt,
    FaUser
} from 'react-icons/fa';

const TextHolder: React.FC<{}> = ({ children }) => (
    <Text mr={2} minW="9.5rem">
        {children}
    </Text>
);

const Profile: React.FC<{}> = ({ }) => {
    const { data } = useMeQuery({ skip: isServer() });
    const [subscribeNewsletter] = useSubscribeNewsletterMutation();
    const [unsubscribeNewsletter] = useUnsubscribeNewsletterMutation();
    const [confirmEmailMessage] = useConfirmEmailMessageMutation();
    const [confirmEmailClick, setConfirmEmailClick] = useState(false);

    return (
        <MainLayout>
            <List padding="8rem 0" spacing={10}>
                <ListItem m="0.5rem 0" d="flex" alignItems="center">
                    <Icon as={FaUser} w={8} h={8} mr={2} />
                    <TextHolder>Username:</TextHolder>
                    <Text mr={2}>{data?.me?.username}</Text>
                    <NextLink href="/user/change-username">
                        <IconButton icon={<FaEdit />} aria-label="Change Username" />
                    </NextLink>
                </ListItem>

                <ListItem m="0.5rem 0" d="flex" alignItems="center">
                    <Icon as={FaEnvelope} w={8} h={8} mr={2} />
                    <TextHolder>Change Email:</TextHolder>
                    <Text mr={4}>{data?.me?.email}</Text>
                    {data?.me?.emailStatus && data.me.emailStatus > 0 ? (
                        <NextLink href="/user/change-email">
                            <IconButton icon={<FaEdit />} aria-label="Change Email" />
                        </NextLink>
                    ) : data?.me?.emailStatus && data.me.emailStatus < 0 ? (
                        !confirmEmailClick ? (
                            <Button
                                mr={2}
                                onClick={async () => {
                                    await confirmEmailMessage({
                                        variables: {
                                            email: typeof data?.me?.email === 'string' ? data?.me?.email : '-1',
                                        },
                                    });

                                    setConfirmEmailClick(true);
                                }}
                            >
                                confirm email
                            </Button>
                        ) : (
                            <Text color="teal">Message to your email has been sent</Text>
                        )
                    ) : (
                        <Text color="teal">Your mail has been confirm</Text>
                    )}
                </ListItem>

                <ListItem m="0.5rem 0" d="flex" alignItems="center">
                    <Icon as={FaAddressCard} w={8} h={8} mr={2} />
                    <TextHolder>Newsletter:</TextHolder>
                    {data?.me?.newsletterSub === -1 ? (
                        <Tooltip label="Subscribe">
                            <IconButton
                                icon={<FaBell />}
                                onClick={async () =>
                                    await subscribeNewsletter({
                                        variables: {
                                            email: typeof data?.me?.email === 'string' ? data?.me?.email : '-1',
                                        },
                                        update: (cache, { data }) => {
                                            if (typeof data?.subscribeNewsletter === 'boolean') return;

                                            if (data?.subscribeNewsletter?.errors) return;

                                            cache.writeQuery<MeQuery>({
                                                query: MeDocument,
                                                data: {
                                                    __typename: 'Query',
                                                    me: data?.subscribeNewsletter?.user,
                                                },
                                            });
                                            cache.evict({});
                                        },
                                    })
                                }
                                aria-label="Subscribe"
                            />
                        </Tooltip>
                    ) : (
                        <Tooltip label="Unsubscribe">
                            <IconButton
                                icon={<FaBellSlash />}
                                fontSize="1.2rem"
                                onClick={async () =>
                                    await unsubscribeNewsletter({
                                        variables: {
                                            email: typeof data?.me?.email === 'string' ? data?.me?.email : '-1',
                                        },
                                        update: (cache, { data }) => {
                                            if (typeof data?.unsubscribeNewsletter === 'boolean') return;

                                            if (data?.unsubscribeNewsletter?.errors) return;

                                            cache.writeQuery<MeQuery>({
                                                query: MeDocument,
                                                data: {
                                                    __typename: 'Query',
                                                    me: data?.unsubscribeNewsletter?.user,
                                                },
                                            });
                                            cache.evict({});
                                        },
                                    })
                                }
                                aria-label="Unsubscribe"
                            />
                        </Tooltip>
                    )}
                </ListItem>

                <ListItem m="0.5rem 0" d="flex" alignItems="center">
                    <Icon as={FaLock} w={8} h={8} mr={2} />
                    <TextHolder>Change Password:</TextHolder>
                    <NextLink href="/user/forgotten-password">
                        <IconButton icon={<FaLockOpen />} aria-label="Reset Password" />
                    </NextLink>
                </ListItem>

                <ListItem m="0.5rem 0" d="flex" alignItems="center">
                    <Icon as={FaAddressCard} w={8} h={8} mr={2} />
                    <TextHolder>Delete Account:</TextHolder>
                    <NextLink href="/user/delete-account">
                        <IconButton icon={<FaTrashAlt />} aria-label="Delete Account" />
                    </NextLink>
                </ListItem>
            </List>
        </MainLayout>
    );
};

export default withApollo({ ssr: false })(Profile);
