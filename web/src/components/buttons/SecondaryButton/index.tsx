import NextLink from 'next/link';
import React from 'react';
import styles from './SecondaryButton.module.scss';

interface SecondaryButtonProps {
    path?: string | null;
    text: string | null;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ path, text }) => {
    const realPath = path ? path : '/';
    const realTest = text ? text : '';

    return (
        <NextLink href={realPath}>
            <a className={styles[`secondary-btn`]}>{realTest}</a>
        </NextLink>
    );
};

export default SecondaryButton;
