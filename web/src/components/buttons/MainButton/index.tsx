import React from 'react';
import styles from './MainButton.module.scss';

interface MainButtonProps {
    text: string | null;
    type?: 'button' | 'submit' | 'reset' | undefined;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    callback?: (arg: string) => void;
}

const MainButton: React.FC<MainButtonProps> = ({ text, type, onClick, callback }) => {
    const realText = text ? text : '';
    const realType = type ? type : 'button';

    const handleCallback = () => {
        if (typeof callback === 'function') callback(realText);
    };

    return (
        <>
            <button className={styles[`main-btn`]} type={realType} onClick={onClick ? onClick : () => handleCallback()}>
                {realText}
            </button>
        </>
    );
};

export default MainButton;
