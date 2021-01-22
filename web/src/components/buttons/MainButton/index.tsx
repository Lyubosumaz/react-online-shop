import React from 'react';
import styles from './MainButton.module.scss';

interface MainButtonProps {
    text: string | null;
    type?: 'button' | 'submit' | 'reset' | undefined;
}

const MainButton: React.FC<MainButtonProps> = ({ text, type }) => {
    const realTest = text ? text : '';
    const realType = type ? type : 'button';

    return (
        <button className={styles[`main-btn`]} type={realType}>
            {realTest}
        </button>
    );
};

export default MainButton;
