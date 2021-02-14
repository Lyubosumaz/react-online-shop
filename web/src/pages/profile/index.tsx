import { Flex, Icon, IconButton, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaIdCard, FaLock, FaLockOpen, FaTimes, FaUser } from 'react-icons/fa';
import { useMeQuery } from '../../generated/graphql';
import MainLayout from '../../layouts/MainLayout';
import { isServer } from '../../utils/isServer';
import { withApollo } from '../../utils/withApollo';

const Profile: React.FC<{}> = ({}) => {
    const { data } = useMeQuery({
        skip: isServer(),
    });

    return (
        <MainLayout>
            <Flex m="0.5rem 0" alignItems="center">
                <Icon as={FaUser} w={8} h={8} mr={2} />
                <Text mr={2} minW="8.5rem">
                    Username:
                </Text>
                <Text>{data?.me?.username}</Text>
            </Flex>

            <Flex m="0.5rem 0" alignItems="center">
                <Icon as={FaLock} w={8} h={8} mr={2} />
                <Text mr={2} minW="8.5rem">
                    Reset Password:
                </Text>
                <NextLink href="/forgotten-password">
                    <IconButton icon={<FaLockOpen />} aria-label="Reset Password" />
                </NextLink>
            </Flex>

            <Flex m="0.5rem 0" alignItems="center">
                <Icon as={FaIdCard} w={8} h={8} mr={2} />
                <Text mr={2} minW="8.5rem">
                    Delete Account:
                </Text>
                <NextLink href="/delete-account">
                    <IconButton icon={<FaTimes />} aria-label="Delete Account" />
                </NextLink>
            </Flex>
        </MainLayout>
    );
};

export default withApollo({ ssr: false })(Profile);
