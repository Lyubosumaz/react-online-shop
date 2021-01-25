import { withUrqlClient } from 'next-urql';
import React from 'react';
import Wrapper from '../../../layouts/MainWrapper';
import { createUrqlClient } from '../../../utils/createUrqlClient';
import styles from './Footer.module.scss';

const Footer: React.FC<{}> = ({}) => {
    return (
        <>
            <footer className={styles[`site-footer`]}>
                <Wrapper>
                    <ul className={styles[`footer-shop`]}>
                        <li>Lorem lpusm hosting web</li>
                        <li>Call: +7586656566</li>
                        <li>demo@mail.com</li>
                    </ul>

                    <ul className={styles[`footer-services`]}>
                        <li className={styles[`service-card`]}>
                            <header>
                                <h5>Useful Link</h5>
                            </header>

                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Our Design</li>
                                <li>Contact Us</li>
                            </ul>
                        </li>

                        <li className={styles[`service-card`]}>
                            <header>
                                <h5>Repair</h5>
                            </header>

                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit 30Levcamsamoajajahavlovemorethenthatajaj.</p>
                        </li>

                        <li className={[styles[`service-card`], styles[`service-card-media`]].join(' ')}>
                            <header>
                                <h5>Social Media</h5>
                            </header>

                            <ul>
                                <li>
                                    <span>F</span>
                                </li>
                                <li>
                                    <span>T</span>
                                </li>
                                <li>
                                    <span>G</span>
                                </li>
                                <li>
                                    <span>L</span>
                                </li>
                            </ul>
                        </li>

                        <li className={styles[`service-card`]}>
                            <header>
                                <h5>Our Repair Center</h5>
                            </header>

                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit 30Levcamsamoajajahavlovemorethenthatajaj.</p>
                        </li>
                    </ul>
                </Wrapper>

                <div className={styles[`site-rights`]}>
                    <p>2020-{new Date().getFullYear()} All Rights Restricted. Design by Free html Templates</p>
                </div>
            </footer>
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Footer);
