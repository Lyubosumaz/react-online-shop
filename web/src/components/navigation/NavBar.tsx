import { withUrqlClient } from 'next-urql';
import NextLink from 'next/link';
import React from 'react';
import Wrapper from '../../components/site/Wrapper';
import { useLogoutMutation, useMeQuery } from '../../generated/graphql';
import buttons from '../../styles/scss/2-basics/Buttons.module.scss';
import site from '../../styles/scss/2-basics/Site.module.scss';
import styles from '../../styles/scss/3-components/NavBar.module.scss';
import { createUrqlClient } from '../../utils/createUrqlClient';
import { isServer } from '../../utils/isServer';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
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

                <li className={site[`vertical-wrapper`]}>
                    <span>Welcome {data.me.username}!</span>
                </li>

                <li>
                    <button className={buttons[`main-btn`]} onClick={() => logout()}>
                        Logout
                    </button>
                </li>
            </>
        );
    }

    return (
        <nav className={styles.nav}>
            <Wrapper>
                <div className={[site[`vertical-wrapper`], styles[`logo-wrapper`]].join(' ')}>
                    <p className={styles[`site-logo`]}>ROS</p>
                </div>
                <ul>{body}</ul>
            </Wrapper>
        </nav>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(NavBar);
