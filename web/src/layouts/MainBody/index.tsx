import React from 'react';
import MainWrapper, { WrapperSize, WrapperVarian } from '../MainWrapper';

interface LayoutProps {
    size?: WrapperSize;
    variant?: WrapperVarian;
}

const MainBody: React.FC<LayoutProps> = ({ children, size, variant }) => {
    return (
        <main>
            <MainWrapper size={size} variant={variant}>
                {children}
            </MainWrapper>
        </main>
    );
};

export default MainBody;
