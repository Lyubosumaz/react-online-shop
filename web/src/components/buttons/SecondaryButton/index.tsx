import NextLink from 'next/link';
import React from 'react';
import styles from './SecondaryButton.module.scss';

interface indexProps {
    path: string | null;
    text: string | null;
}

const SecondaryButton: React.FC<indexProps> = ({ path, text }) => {
    const realPath = path ? path : '/';
    const realTest = text ? text : '';

    return (
        <NextLink href={realPath}>
            <a className={styles[`secondary-btn`]}>{realTest}</a>
        </NextLink>
    );
};

export default SecondaryButton;
