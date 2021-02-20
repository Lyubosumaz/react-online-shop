import { Button, Icon, IconButton, List, ListItem, Text, Tooltip } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { ReactElement, useState } from 'react';
import { FaAddressCard, FaBell, FaBellSlash, FaEdit, FaEnvelope, FaLock, FaLockOpen, FaTrashAlt, FaUser } from 'react-icons/fa';
import { useConfirmEmailMessageMutation, useMeQuery } from '../../generated/graphql';
import MainLayout from '../../layouts/MainLayout';
import { isServer } from '../../utils/isServer';
import { withApollo } from '../../utils/withApollo';

const TextHolder: React.FC<{}> = ({ children }) => (
    <Text mr={2} minW="9.5rem">
        {children}
    </Text>
);

const Buttons: React.FC<{ href: string; label: string; icon: ReactElement }> = ({ href, label, icon }) => (
    <NextLink href={href}>
        <Tooltip label={label}>
            <IconButton icon={icon} aria-label={label} />
        </Tooltip>
    </NextLink>
);

const Profile: React.FC<{}> = ({}) => {
    const { data } = useMeQuery({
        skip: isServer(),
    });
    const [confirmEmailMessage] = useConfirmEmailMessageMutation();
    const [confirmEmailClick, setConfirmEmailClick] = useState(false);

    return (
        <MainLayout>
            <List padding="8rem 0" spacing={10}>
                <ListItem m="0.5rem 0" d="flex" alignItems="center">
                    <Icon as={FaUser} w={8} h={8} mr={2} />
                    <TextHolder>Username:</TextHolder>
                    <Text mr={2}>{data?.me?.username}</Text>
                    <Buttons href="/user/change-username" label="Reset Password" icon={<FaEdit />} />
                    <Tooltip label="Reset Password">
                        <NextLink href="/user/change-username">
                            <IconButton icon={<FaEdit />} aria-label="Reset Password" />
                        </NextLink>
                    </Tooltip>
                </ListItem>

                <ListItem m="0.5rem 0" d="flex" alignItems="center">
                    <Icon as={FaEnvelope} w={8} h={8} mr={2} />
                    <TextHolder>Change Email:</TextHolder>
                    <Text mr={4}>{data?.me?.email}</Text>
                    {data?.me?.emailStatus && data.me.emailStatus > 0 ? (
                        <NextLink href="/user/change-email">
                            <IconButton icon={<FaEdit />} aria-label="Reset Password" />
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
                    {/* <Tooltip label="Subscribe"></Tooltip> */}
                    <IconButton icon={data?.me?.newsletterSub === 1 ? <FaBell /> : <FaBellSlash />} fontSize="1.5rem" aria-label="Newsletter" />
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
