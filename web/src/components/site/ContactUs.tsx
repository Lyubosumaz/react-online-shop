import Link from 'next/link';
import React from 'react';
import styles from '../../styles/ContactUs.module.scss';
import Wrapper from './Wrapper';

const ContactUs: React.FC<{}> = ({}) => {
    return (
        <>
            <div className={styles['contact-us']}>
                <Wrapper>
                    <div className={[styles.column, styles.description].join(' ')}>
                        <h2>
                            <span>Best</span>
                            <span>Design</span>
                            <span>of Furniture</span>
                        </h2>
                        <p>Is is a long established fact that a reader will be distracted by the readable content of</p>
                        <Link href="/">
                            <a>Contact us</a>
                        </Link>
                    </div>
                    <div className={[styles.column, styles.image].join(' ')}>
                        <span>Image</span>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default ContactUs;
