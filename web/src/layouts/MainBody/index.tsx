import MainWrapper, { WrapperSize, WrapperVariant } from '@/layouts/MainWrapper';
import React from 'react';

interface LayoutProps {
    size?: WrapperSize;
    variant?: WrapperVariant;
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
