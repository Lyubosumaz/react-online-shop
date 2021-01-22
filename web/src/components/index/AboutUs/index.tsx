import React from 'react';
import Wrapper from '../../../layouts/MainWrapper';
import site from '../../../styles/scss/2-basics/Site.module.scss';
import styles from '../../../styles/scss/3-components/AboutUs.module.scss';
import SecondaryButton from '../../buttons/SecondaryButton';

const AboutUs: React.FC<{}> = ({}) => {
    return (
        <>
            <div className={styles[`about-us`]}>
                <Wrapper>
                    <div className={[site.column].join(' ')}>
                        <div className={styles[`image-wrapper`]}>
                            <div className={site[`image`]}>
                                <span>Image</span>
                            </div>
                        </div>
                    </div>

                    <div className={[site.column, styles.description].join(' ')}>
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
