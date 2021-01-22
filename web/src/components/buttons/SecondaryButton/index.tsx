import NextLink from 'next/link';
import React from 'react';
import styles from './SecondaryButton.module.scss';

interface SecondaryButtonProps {
    text: string | null;
    path?: string | null;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ text, path }) => {
    const realTest = text ? text : '';
    const realPath = path ? path : '/';

    return (
        <NextLink href={realPath}>
            <a className={styles[`secondary-btn`]}>{realTest}</a>
        </NextLink>
    );
};

export default SecondaryButton;
