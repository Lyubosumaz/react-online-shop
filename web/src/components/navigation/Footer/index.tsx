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
                    <ul className={styles[`footer-shop-details`]}>
                        <li className={styles.info}>Lorem lpusm hosting web</li>
                        <li className={styles.info}>Call: +7586656566</li>
                        <li className={styles.info}>demo@mail.com</li>
                    </ul>

                    <ul className={styles[`footer-services`]}>
                        <li className={[styles[`service-card`], styles[`footer-services-navigation`]].join(' ')}>
                            <header className={styles[`service-card-header`]}>
                                <h5>Useful Link</h5>
                            </header>

                            <ul className={styles[`service-card-list`]}>
                                <li className={styles[`service-card-list-links`]}>Home</li>
                                <li className={styles[`service-card-list-links`]}>About</li>
                                <li className={styles[`service-card-list-links`]}>Our Design</li>
                                <li className={styles[`service-card-list-links`]}>Contact Us</li>
                            </ul>
                        </li>

                        <li className={[styles[`service-card`], styles[`footer-services-repair`]].join(' ')}>
                            <header className={styles[`service-card-header`]}>
                                <h5>Repair</h5>
                            </header>

                            <div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit 30Levcamsamoajajahavlovemorethenthatajaj.</p>
                            </div>
                        </li>

                        <li className={[styles[`service-card`], styles[`footer-services-media`]].join(' ')}>
                            <header className={styles[`service-card-header`]}>
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

                        <li className={[styles[`service-card`], styles[`footer-services-center`]].join(' ')}>
                            <header className={styles[`service-card-header`]}>
                                <h5>Our Repair Center</h5>
                            </header>

                            <div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit 30Levcamsamoajajahavlovemorethenthatajaj.</p>
                            </div>
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
