import React from 'react';
import SecondaryHeader, { goBackButtonStatus } from '../../components/navigation/SecondaryHeader';
import Main from '../MainBody';

interface SecondaryLayoutProps {
    goBackButton?: goBackButtonStatus;
}

const SecondaryLayout: React.FC<SecondaryLayoutProps> = ({ children, goBackButton }) => {
    return (
        <>
            <SecondaryHeader goBackButton={goBackButton} />
            <Main size="small" variant="form">
                {children}
            </Main>
        </>
    );
};

export default SecondaryLayout;
