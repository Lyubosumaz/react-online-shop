import { SecondaryHeader, variantGoBackButton } from '@/components/navigation/SecondaryHeader';
import { MainBody } from '@/layouts/MainBody';
import { FC } from 'react';
interface SecondaryLayoutProps {
    goBackButton?: variantGoBackButton;
}

export const SecondaryLayout: FC<SecondaryLayoutProps> = ({ children, goBackButton }) => {
    return (
        <>
            <SecondaryHeader goBackButton={goBackButton} />
            <MainBody size="small" variant="form">{children}</MainBody>
        </>
    );
};
