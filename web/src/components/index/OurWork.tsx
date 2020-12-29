import React from 'react';
import NextLink from 'next/link';
import Wrapper from '../site/Wrapper';
import site from '../../styles/scss/2-basics/Site.module.scss';
import buttons from '../../styles/scss/2-basics/Buttons.module.scss';
import styles from '../../styles/scss/3-components/OurWork.module.scss';

const OurWork: React.FC<{}> = ({}) => {
    return (
        <>
            <div className={styles['our-work']}>
                <Wrapper>
                    <div className={styles['container']}>
                        <header>
                            <h3>Our Work Furniture</h3>
                            <p>There are many variants of passages to Lorem Ipsum available, but the majority have suffered alteration</p>
                        </header>

                        <ul>
                            <li>
                                <h6>Chair 01</h6>

                                <div className={site[`image`]}>
                                    <span>Image</span>
                                </div>

                                <h6>Price $100</h6>

                                <button className={buttons[`main-btn`]}>Buy Now</button>
                            </li>

                            <li>
                                <h6>Chair 02</h6>

                                <div className={site[`image`]}>
                                    <span>Image</span>
                                </div>

                                <h6>Price $120</h6>

                                <button className={buttons[`main-btn`]}>Buy Now</button>
                            </li>

                            <li>
                                <h6>Table</h6>

                                <div className={site[`image`]}>
                                    <span>Image</span>
                                </div>

                                <h6>Price $240</h6>

                                <button className={buttons[`main-btn`]}>Buy Now</button>
                            </li>
                        </ul>

                        <div className={buttons[`button-wrapper`]}>
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

export default OurWork;
