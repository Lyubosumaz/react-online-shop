import { Heading, IconButton, Link, List, ListItem, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const SectionHeading: React.FC<{}> = ({ children, ...props }) => (
    <Heading as="h4" pb={8} fontSize="1.5rem" textTransform="uppercase" whiteSpace="nowrap" {...props}>
        {children}
    </Heading>
);

const UtilityLinks: React.FC<{}> = ({}) => {
    return (
        <List pb="4rem" display="flex" justifyContent="space-between">
            <ListItem maxWidth="9.5rem">
                <SectionHeading>Useful Link</SectionHeading>

                <List spacing={2} opacity="0.5">
                    {/* TODO links paths need adding */}
                    <ListItem>
                        <NextLink href="/">
                            <Link>Home</Link>
                        </NextLink>
                    </ListItem>
                    <ListItem>
                        <NextLink href="/">
                            <Link>About</Link>
                        </NextLink>
                    </ListItem>
                    <ListItem>
                        <NextLink href="/">
                            <Link>Our Design</Link>
                        </NextLink>
                    </ListItem>
                    <ListItem>
                        <NextLink href="/">
                            <Link>Contact Us</Link>
                        </NextLink>
                    </ListItem>
                </List>
            </ListItem>

            <ListItem maxWidth="8rem">
                <Heading as="h4" pb={8} fontSize="1.5rem" textTransform="uppercase" whiteSpace="nowrap">
                    Repair
                </Heading>

                <Text opacity="0.5">Lorem ipsum dolor sit, amet conse ctet ur adipi sicing elit 30Levcamsamoajajahavlove.</Text>
            </ListItem>

            <ListItem maxWidth="13rem">
                <Heading as="h4" pb={8} fontSize="1.5rem" textTransform="uppercase" whiteSpace="nowrap">
                    Social Media
                </Heading>

                <List display="flex">
                    <ListItem mr={1}>
                        <Link href="https://www.facebook.com/">
                            <IconButton size="lg" fontSize="1.5rem" icon={<FaFacebookF />} borderRadius="full" aria-label="Facebook" backgroundColor="#7c2c0c" _hover={{ backgroundColor: '#efe4d1', color: '#3b5998' }} />
                        </Link>
                    </ListItem>
                    <ListItem mr={1}>
                        <Link href="https://twitter.com/">
                            <IconButton size="lg" fontSize="1.5rem" icon={<FaTwitter />} borderRadius="full" aria-label="Twitter" backgroundColor="#171717" _hover={{ backgroundColor: '#555' }} />
                        </Link>
                    </ListItem>
                    <ListItem mr={1}>
                        <Link href="https://www.google.com/">
                            <IconButton size="lg" fontSize="1.5rem" icon={<FaGoogle />} borderRadius="full" aria-label="Google" backgroundColor="#171717" _hover={{ backgroundColor: '#555' }} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/">
                            <IconButton size="lg" fontSize="1.5rem" icon={<FaLinkedinIn />} borderRadius="full" aria-label="Linkedin" backgroundColor="#171717" _hover={{ backgroundColor: '#555' }} />
                        </Link>
                    </ListItem>
                </List>
            </ListItem>

            <ListItem maxWidth="15rem">
                <Heading as="h4" pb={8} fontSize="1.5rem" textTransform="uppercase" whiteSpace="nowrap">
                    Our Repair Center
                </Heading>

                <Text opacity="0.5">Lorem ipsum dolor sit, amet conse ctet ur adipi sicing elit 30Levcamsamoajajahavlovemorethenthatajaj.</Text>
            </ListItem>
        </List>
    );
};

export default UtilityLinks;
