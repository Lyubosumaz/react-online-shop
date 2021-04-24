import { MainWrapper, WrapperSize, WrapperVariant } from '@/layouts/MainWrapper';
import { FC } from 'react';

interface LayoutProps {
    size?: WrapperSize;
    variant?: WrapperVariant;
}

export const MainBody: FC<LayoutProps> = ({ children, size, variant }) => {
    return (
        <main>
            <MainWrapper size={size} variant={variant}>
                {children}
            </MainWrapper>
        </main>
    );
};
