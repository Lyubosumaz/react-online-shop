import React from 'react';
import Header from '../components/navigation/Header';
import { Wrapper, WrapperVariant } from './Wrapper';

interface LayoutProps {
    variant?: WrapperVariant;
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
    return (
        <>
            <Header />
            <Wrapper variant={variant}>{children}</Wrapper>
        </>
    );
};
