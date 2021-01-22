import React from 'react';
import styles from './MainButton.module.scss';

interface MainButtonProps {
    text: string | null;
    type?: 'button' | 'submit' | 'reset' | undefined;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const MainButton: React.FC<MainButtonProps> = ({ text, type, onClick }) => {
    const realTest = text ? text : '';
    const realType = type ? type : 'button';

    return (
        <>
            <button className={styles[`main-btn`]} type={realType} onClick={onClick}>
                {realTest}
            </button>
        </>
    );
};

export default MainButton;
