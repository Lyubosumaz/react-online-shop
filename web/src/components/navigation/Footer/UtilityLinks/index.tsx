import { CSSWithMultiValues, Heading, IconButton, Link, List, ListItem, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const SectionWrapper: React.FC<{ sectionWidth: string }> = ({ children, sectionWidth }) => {
    const [borderToggle, setBorderToggle] = useState(false);

    return (
        <ListItem
            maxWidth={sectionWidth}
            p="0.75rem"
            border="0.175rem solid"
            borderColor={borderToggle ? "white" : "transparent"}
            rounded="1rem"
            onClick={() => setBorderToggle(!borderToggle)}
        >
            {children}
        </ListItem>
    )
}

const SectionHeading: React.FC<{}> = ({ children, ...props }) => (
    <Heading as="h4" pb={8} fontSize="1.5rem" textTransform="uppercase" whiteSpace="nowrap" {...props}>
        {children}
    </Heading>
);

const SiteLinksItem: React.FC<{ href: string }> = ({ children, href }) => (
    <ListItem
        _hover={{
            color: "primaryL.500",
            transition: "0.375s ease-in-out"
        }}
    >
        <NextLink href={href}>
            <Link style={{ textDecoration: "none" }}>{children}</Link>
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
            <IconButton
                size="lg"
                fontSize="1.5rem"
                icon={icon}
                aria-label={label}
                borderRadius="full"
                backgroundColor={!backgroundColor ? '#171717' : backgroundColor}
                _hover={!hover ? { backgroundColor: '#555' } : hover}
            />
        </Link>
    </ListItem>
);

const UtilityLinks: React.FC<{}> = ({ }) => {
    return (
        <List pb="4rem" display="flex" justifyContent="space-between">
            <SectionWrapper sectionWidth="11rem">
                <SectionHeading>Useful Link</SectionHeading>

                <List spacing={2} opacity="0.5">
                    <SiteLinksItem href="/">Shop</SiteLinksItem>
                    <SiteLinksItem href="/about-us">About Us</SiteLinksItem>
                    <SiteLinksItem href="/contact-us">Contact Us</SiteLinksItem>
                    <SiteLinksItem href="/subscribe-newsletter">Subscribe</SiteLinksItem>
                </List>
            </SectionWrapper>

            <SectionWrapper sectionWidth="10rem">
                <SectionHeading>Repair</SectionHeading>
                <Text opacity="0.5">Lorem ipsum dolor sit, amet conse ctet ur adipi sicing elit 30Levcamsamoajajahavlove.</Text>
            </SectionWrapper>

            <SectionWrapper sectionWidth="14.75rem">
                <SectionHeading>Social Media</SectionHeading>

                <List display="flex">
                    <MediaLinksItem href="https://www.facebook.com/" icon={<FaFacebookF />} label="Facebook" backgroundColor="#7c2c0c" hover={{ backgroundColor: '#efe4d1', color: '#3b5998' }} />
                    <MediaLinksItem href="https://twitter.com/" icon={<FaTwitter />} label="Twitter" />
                    <MediaLinksItem href="https://www.google.com/" icon={<FaGoogle />} label="Google" />
                    <MediaLinksItem href="https://www.linkedin.com/" icon={<FaLinkedinIn />} label="Linkedin" isLast />
                </List>
            </SectionWrapper>

            <SectionWrapper sectionWidth="17rem">
                <SectionHeading>Our Repair Center</SectionHeading>
                <Text opacity="0.5">Lorem ipsum dolor sit, amet conse ctet ur adipi sicing elit 30Levcamsamoajajahavlovemorethenthatajaj.</Text>
            </SectionWrapper>
        </List>
    );
};

export default UtilityLinks;
