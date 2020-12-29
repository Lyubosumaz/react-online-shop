import NextLink from 'next/link';
import React from 'react';
import site from '../../styles/scss/2-basics/Site.module.scss';
import styles from '../../styles/scss/3-components/ContactUs.module.scss';

import Wrapper from '../site/Wrapper';

const ContactUs: React.FC<{}> = ({}) => {
    return (
        <>
            <div className={styles['contact-us']}>
                <Wrapper>
                    <div className={[site.column, styles.description].join(' ')}>
                        <h2>
                            <span>Best</span>
                            <span>Design</span>
                            <span>of Furniture</span>
                        </h2>

                        <p>Is is a long established fact that a reader will be distracted by the readable content of</p>

                        <div className={`button-wrapper`}>
                            <NextLink href="/">
                                <a>Contact us</a>
                            </NextLink>
                        </div>
                    </div>

                    <div className={[site.column, styles.image].join(' ')}>
                        <span>Image</span>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default ContactUs;
