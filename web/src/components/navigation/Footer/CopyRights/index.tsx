import { Flex, Link, Text } from '@chakra-ui/react';
import { FC } from 'react';

const CopyRights: FC<{}> = () => {
    return (
        <Flex
            p="1.5rem 0"
            justify="center"
            align="center"
            bg="white"
            color="black"
            fontWeight="bold"
        >
            <Text mr="0.3rem">&copy;2020-{new Date().getFullYear()} All Rights Restricted. Design by</Text>
            <Link
                href="https://html.design/"
                target="_blank"
                _hover={{
                    color: "primaryL.700",
                    transition: "0.375s ease-in-out",
                }}
            >Free html Templates</Link>
        </Flex>
    );
};

export default CopyRights;
