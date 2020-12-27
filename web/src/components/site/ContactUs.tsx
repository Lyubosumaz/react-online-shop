import Link from 'next/link';
import React from 'react';
import styles from '../../styles/ContactUs.module.scss';
import Wrapper from './Wrapper';

const ContactUs: React.FC<{}> = ({}) => {
    return (
        <>
            <div className={styles['contact-us']}>
                <Wrapper>
                    <div className={styles.column}>
                        <h1>Best Design of Furniture</h1>
                        <p>Is is a long established fact that a reader will be distracted by the readable content of</p>
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </div>
                    <div className={styles.column}>Image</div>
                </Wrapper>
            </div>
        </>
    );
};

export default ContactUs;
