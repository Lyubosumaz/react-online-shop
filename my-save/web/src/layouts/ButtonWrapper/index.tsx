import React from 'react';
import styles from './ButtonWrapper.module.scss';

const ButtonWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <div className={styles[`button-wrapper`]}>{children}</div>
        </>
    );
};

export default ButtonWrapper;
