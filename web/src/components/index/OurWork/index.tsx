import React from 'react';
import Wrapper from '../../../layouts/MainWrapper/MainWrapper';
import site from '../../../styles/scss/2-basics/Site.module.scss';
import MainButton from '../../buttons/MainButton';
import SecondaryButton from '../../buttons/SecondaryButton';
import styles from './OurWork.module.scss';

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

                                <MainButton text={'Buy Now'} />
                            </li>

                            <li>
                                <h6>Chair 02</h6>

                                <div className={site[`image`]}>
                                    <span>Image</span>
                                </div>

                                <h6>Price $120</h6>

                                <MainButton text={'Buy Now'} />
                            </li>

                            <li>
                                <h6>Table</h6>

                                <div className={site[`image`]}>
                                    <span>Image</span>
                                </div>

                                <h6>Price $240</h6>

                                <MainButton text={'Buy Now'} />
                            </li>
                        </ul>

                        <div className={styles[`button-wrapper`]}>
                            <SecondaryButton text={'Read More'} />
                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default OurWork;
