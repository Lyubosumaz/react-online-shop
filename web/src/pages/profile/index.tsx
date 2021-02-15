import { Button, Flex, Icon, IconButton, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaEdit, FaEnvelope, FaIdCard, FaLock, FaLockOpen, FaTrashAlt, FaUser } from 'react-icons/fa';
import { useMeQuery } from '../../generated/graphql';
import MainLayout from '../../layouts/MainLayout';
import { isServer } from '../../utils/isServer';
import { withApollo } from '../../utils/withApollo';

const TextHolder: React.FC<{}> = ({ children }) => (
    <Text mr={2} minW="9.5rem">
        {children}
    </Text>
);

const Profile: React.FC<{}> = ({}) => {
    const { data } = useMeQuery({
        skip: isServer(),
    });

    return (
        <MainLayout>
            <Flex m="0.5rem 0" alignItems="center">
                <Icon as={FaUser} w={8} h={8} mr={2} />
                <TextHolder>Username:</TextHolder>
                <Text mr={2}>{data?.me?.username}</Text>
                <NextLink href="/change-username">
                    <IconButton icon={<FaEdit />} aria-label="Reset Password" />
                </NextLink>
            </Flex>

            <Flex m="0.5rem 0" alignItems="center">
                <Icon as={FaEnvelope} w={8} h={8} mr={2} />
                <TextHolder>Change Email:</TextHolder>
                <Text mr={2}>new@new.com</Text>
                {true ? ( // TODO adding email auth
                    <NextLink href="/change-email">
                        <IconButton icon={<FaEdit />} aria-label="Reset Password" />
                    </NextLink>
                ) : (
                    <NextLink href="/confirm-email">
                        <Button mr={2}>confirm email</Button>
                    </NextLink>
                )}
            </Flex>

            <Flex m="0.5rem 0" alignItems="center">
                <Icon as={FaLock} w={8} h={8} mr={2} />
                <TextHolder>Change Password:</TextHolder>
                <NextLink href="/forgotten-password">
                    <IconButton icon={<FaLockOpen />} aria-label="Reset Password" />
                </NextLink>
            </Flex>

            <Flex m="0.5rem 0" alignItems="center">
                <Icon as={FaIdCard} w={8} h={8} mr={2} />
                <TextHolder>Delete Account:</TextHolder>
                <NextLink href="/delete-account">
                    <IconButton icon={<FaTrashAlt />} aria-label="Delete Account" />
                </NextLink>
            </Flex>
        </MainLayout>
    );
};

export default withApollo({ ssr: false })(Profile);
