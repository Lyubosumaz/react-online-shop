import { SecondaryHeader, variantGoBackButton } from '@/components/navigation/SecondaryHeader';
import React from 'react';
import Main from '../MainBody';
interface SecondaryLayoutProps {
    goBackButton?: variantGoBackButton;
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
