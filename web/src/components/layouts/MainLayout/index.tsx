import React from 'react';
import Footer from '../../navigation/Footer';
import Header from '../../navigation/Header';
import MainWrapper, { WrapperVariant } from '../MainWrapper';

interface LayoutProps {
    variant?: WrapperVariant;
}

const MainLayout: React.FC<LayoutProps> = ({ children, variant }) => {
    return (
        <>
            <Header />
            <MainWrapper variant={variant}>{children}</MainWrapper>
            <Footer />
        </>
    );
};

export default MainLayout;
