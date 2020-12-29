import React from 'react';
import NextLink from 'next/link';
import Wrapper from '../site/Wrapper';
import site from '../../styles/scss/2-basics/Site.module.scss';
import buttons from '../../styles/scss/2-basics/Buttons.module.scss';
import styles from '../../styles/scss/3-components/AboutUs.module.scss';

const AboutUs: React.FC<{}> = ({}) => {
    return (
        <>
            <div className={styles[`about-us`]}>
                <Wrapper>
                    <div className={[site.column].join(' ')}>
                        <div className={styles[`image-wrapper`]}>
                            <div className="actual-image"></div>
                        </div>
                    </div>

                    <div className={[site.column, styles.description].join(' ')}>
                        <h5>About us</h5>

                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized</p>

                        <div className={`button-wrapper`}>
                            <NextLink href="/">
                                <a className={buttons[`seconders-btn`]}>Read More</a>
                            </NextLink>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default AboutUs;
