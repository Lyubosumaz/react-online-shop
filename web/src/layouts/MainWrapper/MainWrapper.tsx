import React from 'react';
import styles from '../../styles/scss/3-components/Wrapper.module.scss';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
