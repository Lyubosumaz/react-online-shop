import React from 'react';
import styles from './MainButton.module.scss';

interface MainButtonProps {
    text: string | null;
}

const MainButton: React.FC<MainButtonProps> = ({ text }) => {
    return <button className={styles[`main-btn`]}>{text}</button>;
};

export default MainButton;
