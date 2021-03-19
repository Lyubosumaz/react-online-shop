import { Icon, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaStore } from 'react-icons/fa';

const Logo: React.FC<{}> = ({ }) => {
    return (
        <NextLink href="/">
            <Link
                p={2}
                display="flex"
                alignItems="center"
                border="0.175rem solid transparent"
                borderRadius={8}
                _hover={{ borderColor: 'secondaryL.100' }}
            >
                <Icon as={FaStore} w={8} h={8} />
                <Text fontSize="2.5rem" fontWeight="700" lineHeight={1}>ROS</Text>
            </Link>
        </NextLink>
    );
};

export default Logo;
