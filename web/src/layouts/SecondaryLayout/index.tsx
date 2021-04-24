import { SecondaryHeader, variantGoBackButton } from '@/components/navigation/SecondaryHeader';
import { MainBody } from '@/layouts/MainBody';
import React from 'react';
interface SecondaryLayoutProps {
    goBackButton?: variantGoBackButton;
}

export const SecondaryLayout: React.FC<SecondaryLayoutProps> = ({ children, goBackButton }) => {
    return (
        <>
            <SecondaryHeader goBackButton={goBackButton} />
            <MainBody size="small" variant="form">{children}</MainBody>
        </>
    );
};
