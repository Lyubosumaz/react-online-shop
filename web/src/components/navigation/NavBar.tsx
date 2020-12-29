import React from 'react';
import NextLink from 'next/link';
import { useLogoutMutation, useMeQuery } from '../../generated/graphql';
import { isServer } from '../../utils/isServer';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../../utils/createUrqlClient';
import Wrapper from '../../components/site/Wrapper';
import styles from '../../styles/scss/3-components/NavBar.module.scss';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
    const [{ fetching: LogoutFetching }, logout] = useLogoutMutation();
    const [{ data, fetching }] = useMeQuery({
        pause: isServer(),
    });
    let body = null;

    if (fetching) {
        // data is loading
    } else if (!data?.me) {
        // user not logged in
        body = (
            <>
                <li className={`nav-items site`}>
                    <ul>
                        <li className={styles.list}>
                            <NextLink href="/">
                                <a>Home</a>
                            </NextLink>
                        </li>
                    </ul>
                </li>
                <li className={`nav-items user`}>
                    <ul>
                        <li className={styles.list}>
                            <NextLink href="/login">
                                <a>Login</a>
                            </NextLink>
                        </li>
                        <li className={styles.list}>
                            <NextLink href="/register">
                                <a>Register</a>
                            </NextLink>
                        </li>
                    </ul>
                </li>
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

    return (
        <nav className={styles.nav}>
            <Wrapper>
                <ul>{body}</ul>
            </Wrapper>
        </nav>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(NavBar);
