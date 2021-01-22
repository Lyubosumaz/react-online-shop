import React from 'react';
import Wrapper from '../../../layouts/MainWrapper';
import SecondaryButton from '../../buttons/SecondaryButton';
import styles from './BestDesign.module.scss';

const BestDesign: React.FC<{}> = ({}) => {
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

                        <div className={`button-wrapper`}>
                            <SecondaryButton text={'Contact us'} />
                        </div>
                    </div>

                    <div className={[styles.column, styles.image].join(' ')}>
                        <span>Image</span>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default BestDesign;
