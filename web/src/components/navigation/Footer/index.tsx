import { Flex, Heading, IconButton, Link, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaMapMarkerAlt, FaMobileAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';

const Footer: React.FC<{}> = ({}) => {
    return (
        <footer>
            <List display="flex" justifyContent="space-around">
                <ListItem>
                    <ListIcon as={FaMapMarkerAlt} boxSize={6} color="green.500" />
                    Lorem lpusm hosting web
                </ListItem>
                <ListItem>
                    <ListIcon as={FaMobileAlt} boxSize={6} color="green.500" />
                    Call: +7586656566
                </ListItem>
                <ListItem>
                    <ListIcon as={FaPhoneAlt} boxSize={6} color="green.500" />
                    demo@mail.com
                </ListItem>
            </List>

            <List display="flex" justifyContent="space-between">
                <ListItem maxWidth="7rem">
                    <Heading as="h4" size="md">
                        Useful Link
                    </Heading>

                    <List>
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
                    <Heading as="h4" size="md">
                        Repair
                    </Heading>

                    <Text>Lorem ipsum dolor sit, amet conse ctet ur adipi sicing elit 30Levcamsamoajajahavlove.</Text>
                </ListItem>

                <ListItem maxWidth="13rem">
                    <Heading as="h4" size="md">
                        Social Media
                    </Heading>

                    <List display="flex">
                        <ListItem mr={1}>
                            <NextLink href="/" as={'some'}>
                                <IconButton as={Link} size="lg" icon={<FaFacebookF />} borderRadius="full" aria-label="Edit Item" />
                            </NextLink>
                        </ListItem>
                        <ListItem mr={1}>
                            <NextLink href="/" as={'some'}>
                                <IconButton as={Link} size="lg" icon={<FaTwitter />} borderRadius="full" aria-label="Edit Item" />
                            </NextLink>
                        </ListItem>
                        <ListItem mr={1}>
                            <NextLink href="/" as={'some'}>
                                <IconButton as={Link} size="lg" icon={<FaGoogle />} borderRadius="full" aria-label="Edit Item" />
                            </NextLink>
                        </ListItem>
                        <ListItem>
                            <NextLink href="/" as={'some'}>
                                <IconButton as={Link} size="lg" icon={<FaLinkedinIn />} borderRadius="full" aria-label="Edit Item" />
                            </NextLink>
                        </ListItem>
                    </List>
                </ListItem>

                <ListItem maxWidth="15rem">
                    <Heading as="h4" size="md">
                        Our Repair Center
                    </Heading>

                    <Text>Lorem ipsum dolor sit, amet conse ctet ur adipi sicing elit 30Levcamsamoajajahavlovemorethenthatajaj.</Text>
                </ListItem>
            </List>

            <Flex p="1rem 0" justifyContent="center" alignItems="center">
                <Text>2020-{new Date().getFullYear()} All Rights Restricted. Design by Free html Templates</Text>
            </Flex>
        </footer>
    );
};

export default Footer;
