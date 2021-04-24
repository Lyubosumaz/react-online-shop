import { MainWrapper, WrapperSize, WrapperVariant } from '@/layouts/MainWrapper';
import React from 'react';

interface LayoutProps {
    size?: WrapperSize;
    variant?: WrapperVariant;
}

export const MainBody: React.FC<LayoutProps> = ({ children, size, variant }) => {
    return (
        <main>
            <MainWrapper size={size} variant={variant}>
                {children}
            </MainWrapper>
        </main>
    );
};
