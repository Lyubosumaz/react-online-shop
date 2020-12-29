import React from 'react';
import Wrapper from '../site/Wrapper';
import styles from '../../styles/scss/3-components/OurWork.module.scss';
import NextLink from 'next/link';

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
                                <h6>Chair 1</h6>
                                <div className="actual-image"></div>
                                <h6>Price $100</h6>
                                <button>Buy Now</button>
                            </li>

                            <li>
                                <h6>Chair 1</h6>
                                <div className="actual-image"></div>
                                <h6>Price $100</h6>
                                <button>Buy Now</button>
                            </li>

                            <li>
                                <h6>Chair 1</h6>
                                <div className="actual-image"></div>
                                <h6>Price $100</h6>
                                <button>Buy Now</button>
                            </li>
                        </ul>

                        <div className={styles[`button-wrapper`]}>
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

export default OurWork;
