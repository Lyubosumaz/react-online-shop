import React from 'react';
import styles from './ItemWrapper.module.scss';

const ItemWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <ul className={styles[`item-wrapper`]}>{children}</ul>;
};

export default ItemWrapper;
