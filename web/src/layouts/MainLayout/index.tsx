import React from 'react';
import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import MainWrapper, { WrapperSize, WrapperVarian } from '../MainWrapper';

interface LayoutProps {
    size?: WrapperSize;
    variant?: WrapperVarian;
}

const MainLayout: React.FC<LayoutProps> = ({ children, size, variant }) => {
    return (
        <>
            <Header />
            <main>
                <MainWrapper size={size} variant={variant}>
                    {children}
                </MainWrapper>
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
