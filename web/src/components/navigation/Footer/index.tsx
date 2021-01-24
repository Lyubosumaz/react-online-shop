import { withUrqlClient } from 'next-urql';
import React from 'react';
import { createUrqlClient } from '../../../utils/createUrqlClient';

const Footer: React.FC<{}> = ({}) => {
    return (
        <>
            <ul>
                <li>Lorem lpusm hosting web</li>
                <li>Call: +7586656566</li>
                <li>demo@mail.com</li>
            </ul>

            <ul>
                <li>
                    <header>
                        <h3>Useful Link</h3>
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
                        <h3>Repair</h3>
                    </header>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit 30Levcamsamoajajahavlovemorethenthatajaj.</p>
                </li>
                <li>
                    <header>
                        <h3>Social Media</h3>
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
                        <h3>Our Repair Center</h3>
                    </header>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit 30Levcamsamoajajahavlovemorethenthatajaj.</p>
                </li>
            </ul>

            <div>
                <p>2020-2021 All Rights Restricted. Design by Free html Templates</p>
            </div>
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Footer);
