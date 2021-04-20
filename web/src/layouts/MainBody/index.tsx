import React from 'react';
import MainWrapper, { WrapperSize, WrapperVariant } from '../MainWrapper';

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
