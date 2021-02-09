import React from 'react';
import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import MainWrapper, { WrapperVariant } from '../MainWrapper';

interface LayoutProps {
    variant?: WrapperVariant;
}

const MainLayout: React.FC<LayoutProps> = ({ children, variant }) => {
    return (
        <>
            <Header />
            <main>
                <MainWrapper variant={variant}>{children}</MainWrapper>
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
