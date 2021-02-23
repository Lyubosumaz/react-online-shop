import { Button, Flex, IconButton, Link, List, ListItem, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useMeQuery } from '../../../generated/graphql';
import { isServer } from '../../../utils/isServer';
import ColorMode from '../../buttons/ColorMode';
import LangSelect from "../../buttons/LangSelect";
import Logout from "../../buttons/Logout";

interface NavItemProps {
    href: string,
    variant?: "regular" | "profile" | "cart";
}

const ListItemWrapper: React.FC<{ isLast?: boolean }> = ({ children, isLast }) => {
    return (
        <ListItem mr={isLast ? 0 : 4} d="flex" alignItems="center" >
            {children}
        </ListItem>

    )
}
const NavItem: React.FC<NavItemProps> = ({ children, href, variant = "regular" }) => {
    return (
        <>
            { variant === "profile" ? <Text mr={2} fontWeight="bold">Welcome:</Text> : null}
            <NextLink href={href}>
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
            </NextLink>
        </>
    )
};

const NavBar: React.FC<{}> = ({ }) => {
    const { data } = useMeQuery({ skip: isServer() });


    return (
        <List>
            <Flex ml={'auto'} alignItems="center">
                <List d="flex">
                    {!data?.me
                        ? <>
                            <ListItemWrapper><NavItem href="/login">Login</NavItem></ListItemWrapper>
                            <ListItemWrapper><NavItem href="/register">Register</NavItem></ListItemWrapper>
                        </>
                        : <>
                            <ListItemWrapper><NavItem href="/create-item">Create Item</NavItem></ListItemWrapper>
                            <ListItemWrapper><NavItem href="/profile" variant="profile">{data.me.username}</NavItem></ListItemWrapper>
                            <ListItemWrapper><NavItem href="/cart" variant="cart" /></ListItemWrapper>
                        </>
                    }
                    <ListItemWrapper ><Logout /></ListItemWrapper>
                    {/* TODO button for translate site */}
                    <ListItemWrapper isLast><LangSelect /></ListItemWrapper>
                    <ListItemWrapper isLast><ColorMode control="custom" /></ListItemWrapper>
                </List>
            </Flex>
        </List>
    );
};

export default NavBar;
