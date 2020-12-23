import React from 'react';
import NextLink from 'next/link';
import { useLogoutMutation, useMeQuery } from '../../generated/graphql';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
    const [{ fetching: LogoutFetching }, logout] = useLogoutMutation();
    const [{ data, fetching }] = useMeQuery();
    let body = null;

    if (fetching) {
        // data is loading
    } else if (!data?.me) {
        // user not logged in
        body = (
            <>
                <NextLink href="/">Home</NextLink>
                <NextLink href="/login">Login</NextLink>
                <NextLink href="/register">Register</NextLink>
            </>
        );
    } else {
        // user is logged in
        body = (
            <>
                <div>{data.me.username}</div>
                <button onClick={() => logout()}>Logout</button>
            </>
        );
    }

    return <div>{body}</div>;
};

export default NavBar;
