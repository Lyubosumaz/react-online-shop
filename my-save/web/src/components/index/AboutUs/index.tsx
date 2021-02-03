import React from 'react';
import Wrapper from '../../../layouts/MainWrapper';
import SecondaryButton from '../../buttons/SecondaryButton';
import styles from './AboutUs.module.scss';

const AboutUs: React.FC<{}> = ({}) => {
    return (
        <>
            <div className={styles[`about-us`]}>
                <Wrapper>
                    <div className={styles.column}>
                        <div className={styles[`image-wrapper`]}>
                            <div className={styles.image}>
                                <span>Image</span>
                            </div>
                        </div>
                    </div>

                    <div className={[styles.column, styles.description].join(' ')}>
                        <h5>About us</h5>

                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized</p>

                        <div className={`button-wrapper`}>
                            <SecondaryButton text={'Read More'} />
                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default AboutUs;
