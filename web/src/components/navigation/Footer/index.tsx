import { withUrqlClient } from 'next-urql';
import React from 'react';
import { createUrqlClient } from '../../../utils/createUrqlClient';
import styles from './Footer.module.scss';

const Footer: React.FC<{}> = ({}) => {
    return (
        <>
            <footer>
                <ul>
                    <li>Lorem lpusm hosting web</li>
                    <li>Call: +7586656566</li>
                    <li>demo@mail.com</li>
                </ul>

                <ul>
                    <li>
                        <header>
                            <h5>Useful Link</h5>
                        </header>

                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Our Designe</li>
                            <li>Contact Us</li>
                        </ul>
                    </li>
                    <li>
                        <header>
                            <h5>Repair</h5>
                        </header>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit 30Levcamsamoajajahavlovemorethenthatajaj.</p>
                    </li>
                    <li>
                        <header>
                            <h5>Social Media</h5>
                        </header>

                        <ul>
                            <li>Facebook</li>
                            <li>Tweeter</li>
                            <li>Google+</li>
                            <li>Linkedin</li>
                        </ul>
                    </li>
                    <li>
                        <header>
                            <h5>Our Repair Center</h5>
                        </header>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit 30Levcamsamoajajahavlovemorethenthatajaj.</p>
                    </li>
                </ul>

                <div className={styles[`footer-rights`]}>
                    <p>2020-{new Date().getFullYear()} All Rights Restricted. Design by Free html Templates</p>
                </div>
            </footer>
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Footer);
