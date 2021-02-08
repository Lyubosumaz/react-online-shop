import React from 'react';
import MainWrapper, { WrapperVariant } from '../components/layouts/MainWrapper';
import Header from '../components/navigation/Header';

interface LayoutProps {
    variant?: WrapperVariant;
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
    return (
        <>
            <Header />
            <MainWrapper variant={variant}>{children}</MainWrapper>
        </>
    );
};
