import {
    CSSWithMultiValues,
    Heading,
    IconButton,
    Link,
    List,
    ListItem,
    Text
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import {
    FaFacebookF,
    FaGoogle,
    FaLinkedinIn,
    FaTwitter
} from 'react-icons/fa';

const SectionHeading: React.FC<{}> = ({ children, ...props }) => (
    <Heading as="h4" pb={8} fontSize="1.5rem" textTransform="uppercase" whiteSpace="nowrap" {...props}>
        {children}
    </Heading>
);

const SiteLinksItem: React.FC<{ href: string }> = ({ children, href }) => (
    <ListItem
        _hover={{
            color: "primaryL.500",
            transition: "0.5s ease-in-out"
        }}
    >
        <NextLink href={href}>
            <Link>{children}</Link>
        </NextLink>
    </ListItem>
);
interface MediaLinksItemProps {
    href: string;
    icon: any;
    label: string;
    backgroundColor?: string;
    hover?: CSSWithMultiValues;
    isLast?: boolean;
}

const MediaLinksItem: React.FC<MediaLinksItemProps> = ({ href, icon, label, backgroundColor, hover, isLast }) => (
    <ListItem mr={isLast ? 0 : 1}>
        <Link href={href}>
            <IconButton size="lg" fontSize="1.5rem" icon={icon} aria-label={label} borderRadius="full" backgroundColor={!backgroundColor ? '#171717' : backgroundColor} _hover={!hover ? { backgroundColor: '#555' } : hover} />
        </Link>
    </ListItem>
);

const UtilityLinks: React.FC<{}> = ({ }) => {
    return (
        <List pb="4rem" display="flex" justifyContent="space-between">
            <ListItem maxWidth="9.5rem">
                <SectionHeading>Useful Link</SectionHeading>

                <List spacing={2} opacity="0.5">
                    <SiteLinksItem href="/">Shop</SiteLinksItem>
                    <SiteLinksItem href="/about-us">About Us</SiteLinksItem>
                    <SiteLinksItem href="/contact-us">Contact Us</SiteLinksItem>
                    <SiteLinksItem href="/subscribe-newsletter">Subscribe</SiteLinksItem>
                </List>
            </ListItem>

            <ListItem maxWidth="8rem">
                <SectionHeading>Repair</SectionHeading>
                <Text opacity="0.5">Lorem ipsum dolor sit, amet conse ctet ur adipi sicing elit 30Levcamsamoajajahavlove.</Text>
            </ListItem>

            <ListItem maxWidth="13rem">
                <SectionHeading>Social Media</SectionHeading>

                <List display="flex">
                    <MediaLinksItem href="https://www.facebook.com/" icon={<FaFacebookF />} label="Facebook" backgroundColor="#7c2c0c" hover={{ backgroundColor: '#efe4d1', color: '#3b5998' }} />
                    <MediaLinksItem href="https://twitter.com/" icon={<FaTwitter />} label="Twitter" />
                    <MediaLinksItem href="https://www.google.com/" icon={<FaGoogle />} label="Google" />
                    <MediaLinksItem href="https://www.linkedin.com/" icon={<FaLinkedinIn />} label="Linkedin" isLast />
                </List>
            </ListItem>

            <ListItem maxWidth="15rem">
                <SectionHeading>Our Repair Center</SectionHeading>
                <Text opacity="0.5">Lorem ipsum dolor sit, amet conse ctet ur adipi sicing elit 30Levcamsamoajajahavlovemorethenthatajaj.</Text>
            </ListItem>
        </List>
    );
};

export default UtilityLinks;
