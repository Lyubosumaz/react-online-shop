import { Box } from '@chakra-ui/react';
import React from 'react';

export type WrapperSize = 'small' | 'regular';
export type WrapperVarian = 'form' | 'element';

interface WrapperProps {
    size?: WrapperSize;
    variant?: WrapperVarian;
}

const MainWrapper: React.FC<WrapperProps> = ({ children, size = 'regular', variant = 'element' }) => {
    return (
        <Box maxWidth={size === 'regular' ? '68rem' : '34rem'} m="0 auto" p={variant === 'element' ? '0' : '4em 0'}>
            {children}
        </Box>
    );
};

export default MainWrapper;
