import { SecondaryHeader, variantGoBackButton } from '@/components/navigation/SecondaryHeader';
import Main from '@/layouts/MainBody';
import React from 'react';
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
