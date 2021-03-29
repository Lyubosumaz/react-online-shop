import Logout from '@/components/buttons/Logout';
import SiteUtilities from '@/components/SiteUtilities';
import { useMeQuery } from '@/generated/graphql';
import { isServer } from '@/utils/isServer';
import { Button, IconButton, Link, List, ListItem, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

interface NavItemProps {
    href: string;
    variant?: "regular" | "profile" | "cart" | "wrap";
    isLast?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ children, href, variant = "regular", isLast }) => {
    const item = (variant: string) => {
        switch (variant) {
            case "regular":
                return (
                    <NextLink href={href}>
                        <Button
                            p="0 1rem"
                            as={Link}
                            textTransform="uppercase"
                            bgColor="inherit"
                            _hover={{
                                bgColor: 'secondaryL.100',
                                color: 'primaryL.700'
                            }}
                        >{children}</Button>
                    </NextLink>
                );
            case "profile":
                return (
                    // <Flex align="center">
                    <>
                        { variant === "profile" ? <Text mr={2} fontWeight="bold">Welcome:</Text> : null}
                        <NextLink href={href}>
                            <Button
                                p="0 0.75rem"
                                as={Link}
                                textTransform="uppercase"
                                bgColor="inherit"
                                _hover={{
                                    bgColor: 'secondaryL.100',
                                    color: 'primaryL.700'
                                }}
                            >{children}</Button>
                        </NextLink>
                    </>
                    // </Flex>
                );
            case "cart":
                return (
                    <NextLink href={href}>
                        <IconButton
                            aria-label="Cart"
                            icon={<FaShoppingCart />}
                            bgColor="inherit"
                            _hover={{
                                bgColor: 'secondaryL.100',
                                color: 'primaryL.700'
                            }}
                        />
                    </NextLink>
                );
            case "wrap":
                return (children);
            default:
                return (<p>There is a Problem</p>);
        }
    }

    return (
        <ListItem mr={isLast ? 0 : 2}>
            {item(variant)}
        </ListItem>
    )
};

const NavBar: React.FC<{}> = ({ }) => {
    const { data } = useMeQuery({ skip: isServer() });
    const items = !data?.me
        ? (
            <>
                <NavItem key="1" href="/login">Login</NavItem>
                <NavItem key="2" href="/register">Register</NavItem>
            </>
        ) : (
            <>
                <NavItem key="3" href="/profile" variant="profile">{data.me.username}</NavItem>
                <NavItem key="4" href="/cart" variant="cart" />
                <NavItem key="5" href="/create-item">Create Item</NavItem>
                <NavItem key="6" href="#" variant="wrap"><Logout /></NavItem>
            </>
        );

    return (
        <List d="flex">
            {items}
            <NavItem href="#" variant="wrap" isLast><SiteUtilities distance={2} /></NavItem>
        </List>
    );
};

export default NavBar;
