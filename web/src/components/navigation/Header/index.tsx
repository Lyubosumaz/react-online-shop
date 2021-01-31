import { withUrqlClient } from 'next-urql';
import NextLink from 'next/link';
import React from 'react';
import { useLogoutMutation, useMeQuery } from '../../../generated/graphql';
import Wrapper from '../../../layouts/MainWrapper';
import { createUrqlClient } from '../../../utils/createUrqlClient';
import { isServer } from '../../../utils/isServer';
import MainButton from '../../buttons/MainButton';
import styles from './Header.module.scss';

const NavBar: React.FC<{}> = ({}) => {
    const [, logout] = useLogoutMutation();
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
                        <li className={styles.list}>
                            <NextLink href="/create-item">
                                <a>Create Item</a>
                            </NextLink>
                        </li>
                        <li className={styles.list}>
                            <NextLink href="/forgotten-password">
                                <a>Redeem Password</a>
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
                <li className={styles.list}>
                    <NextLink href="/create-item">
                        <a>Create Item</a>
                    </NextLink>
                </li>

                <li className={styles[`vertical-wrapper`]}>
                    <span>Welcome {data.me.username}!</span>
                </li>

                <li>
                    <MainButton text={'Logout'} onClick={() => logout()} />
                </li>
            </>
        );
    }

    return (
        <nav className={styles.nav}>
            <Wrapper>
                <ul className={styles[`nav-list`]}>
                    <li className={[styles[`vertical-wrapper`], styles[`logo-wrapper`]].join(' ')}>
                        <p className={styles[`site-logo`]}>ROS</p>
                    </li>

                    {body}
                </ul>
            </Wrapper>
        </nav>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(NavBar);
