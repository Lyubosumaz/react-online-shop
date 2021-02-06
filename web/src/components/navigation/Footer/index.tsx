import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Footer: React.FC<{}> = ({}) => {
    return (
        <footer
        // className={styles[`site-footer`]}
        >
            <ul
            // className={styles[`footer-shop-details`]}
            >
                <li
                // className={styles.info}
                >
                    Lorem lpusm hosting web
                </li>
                <li
                // className={styles.info}
                >
                    Call: +7586656566
                </li>
                <li
                // className={styles.info}
                >
                    demo@mail.com
                </li>
            </ul>

            <ul
            // className={styles[`footer-services`]}
            >
                <li
                // className={[styles[`service-card`], styles[`service-card-navigation`]].join(' ')}
                >
                    <header
                    // className={styles.header}
                    >
                        <h5>Useful Link</h5>
                    </header>

                    <ul
                    // className={styles.body}
                    >
                        <li
                        // className={styles.links}
                        >
                            Home
                        </li>
                        <li
                        // className={styles.links}
                        >
                            About
                        </li>
                        <li
                        // className={styles.links}
                        >
                            Our Design
                        </li>
                        <li
                        // className={styles.links}
                        >
                            Contact Us
                        </li>
                    </ul>
                </li>

                <li
                // className={[styles[`service-card`], styles[`service-card-repair`]].join(' ')}
                >
                    <header
                    // className={styles.header}
                    >
                        <h5>Repair</h5>
                    </header>

                    <p
                    // className={styles.body}
                    >
                        Lorem ipsum dolor sit, amet conse ctet ur adipi sicing elit 30Levcamsamoajajahavlove.
                    </p>
                </li>

                <li
                // className={[styles[`service-card`], styles[`service-card-media`]].join(' ')}
                >
                    <header
                    // className={styles.header}
                    >
                        <h5>Social Media</h5>
                    </header>

                    <ul
                    // className={styles.list}
                    >
                        <li
                        // className={styles.links}
                        ></li>
                        <li
                        // className={styles.links}
                        ></li>
                        <li
                        // className={styles.links}
                        ></li>
                        <li
                        // className={styles.links}
                        ></li>
                    </ul>
                </li>

                <li
                // className={[styles[`service-card`], styles[`service-card-center`]].join(' ')}
                >
                    <header
                    // className={styles.header}
                    // className={styles[`site-rights`]}
                    >
                        <h5>Our Repair Center</h5>
                    </header>

                    <p
                    // className={styles.body}
                    >
                        Lorem ipsum dolor sit, amet conse ctet ur adipi sicing elit 30Levcamsamoajajahavlovemorethenthatajaj.
                    </p>
                </li>
            </ul>

            <Flex p="1rem 0" justifyContent="center" alignItems="center">
                <Text>2020-{new Date().getFullYear()} All Rights Restricted. Design by Free html Templates</Text>
            </Flex>
        </footer>
    );
};

export default Footer;
