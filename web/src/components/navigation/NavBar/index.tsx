import ColorMode from '@/components/buttons/ColorMode';
import LangSelect from "@/components/buttons/LangSelect";
import Logout from "@/components/buttons/Logout";
import { useMeQuery } from '@/generated/graphql';
import { isServer } from '@/utils/isServer';
import { Button, IconButton, Link, List, ListItem, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

interface NavItemProps {
    href: string;
    variant?: "regular" | "profile" | "cart";
    isLast?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ children, href, variant = "regular", isLast }) => {
    return (
        <NextLink href={href}>
            <ListItem mr={isLast ? 0 : 2} d="flex" alignItems="center">
                {variant === "profile" ? <Text mr={2} fontWeight="bold">Welcome:</Text> : null}
                {variant === "cart"
                    ? (
                        < IconButton
                            aria-label="Cart"
                            icon={<FaShoppingCart />}
                            bgColor="inherit"
                            _hover={{
                                bgColor: 'secondaryL.100',
                                color: 'primaryL.700'
                            }}
                        />
                    ) : (
                        <Button
                            p={variant === "profile" ? "0 0.75rem" : "0 1rem"}
                            as={Link}
                            textTransform="uppercase"
                            bgColor="inherit"
                            _hover={{
                                bgColor: 'secondaryL.100',
                                color: 'primaryL.700'
                            }}
                        >
                            {children}
                        </Button>
                    )
                }
            </ListItem>
        </NextLink>
    )
};

const NavBar: React.FC<{}> = ({ }) => {
    const { data } = useMeQuery({ skip: isServer() });

    return (
        <List d="flex">
            {!data?.me
                ? <>
                    <NavItem href="/login">Login</NavItem>
                    <NavItem href="/register">Register</NavItem>
                </>
                : <>
                    <NavItem href="/profile" variant="profile">{data.me.username}</NavItem>
                    <NavItem href="/create-item">Create Item</NavItem>
                    <NavItem href="/cart" variant="cart" />
                    <ListItem mr={2}><Logout /></ListItem>
                </>
            }
            {/* TODO button for translate site */}
            <ListItem mr={2}><LangSelect /></ListItem>
            <ListItem><ColorMode control="custom" /></ListItem>
        </List>
    );
};

export default NavBar;
