import React from 'react';
import site from '../../styles/scss/Site.module.scss';
import styles from '../../styles/scss/AboutUs.module.scss';
import Wrapper from '../site/Wrapper';
import NextLink from 'next/link';

const AboutUs: React.FC<{}> = ({}) => {
    return (
        <>
            <div className={styles['about-us']}>
                <Wrapper>
                    <div className={[site.column].join(' ')}>
                        <div className={styles['image-wrapper']}>
                            <div className="actual-image"></div>
                        </div>
                    </div>
                    <div className={[site.column, styles.description].join(' ')}>
                        <h5>About us</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized</p>
                        <div className={`button-wrapper`}>
                            <NextLink href="/">
                                <a>Read More</a>
                            </NextLink>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default AboutUs;
