import React from 'react';
import styles from '../../styles/scss/AboutUs.module.scss';
import Wrapper from '../site/Wrapper';

const AboutUs: React.FC<{}> = ({}) => {
    return (
        <>
            <Wrapper>
                <div className={[styles.column].join(' ')}>sda</div>
                <div className={[styles.column].join(' ')}>dsad</div>
            </Wrapper>
        </>
    );
};

export default AboutUs;
