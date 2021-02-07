import { Flex, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import { FaMapMarkerAlt, FaMobileAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer: React.FC<{}> = ({}) => {
    return (
        <footer>
            <List display="flex" justifyContent="space-around">
                <ListItem>
                    <ListIcon as={FaMapMarkerAlt} boxSize={6} color="green.500" />
                    Lorem lpusm hosting web
                </ListItem>
                <ListItem>
                    <ListIcon as={FaMobileAlt} boxSize={6} color="green.500" />
                    Call: +7586656566
                </ListItem>
                <ListItem>
                    <ListIcon as={FaPhoneAlt} boxSize={6} color="green.500" />
                    demo@mail.com
                </ListItem>
            </List>

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
