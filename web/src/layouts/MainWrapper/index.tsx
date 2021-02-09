import { Box } from '@chakra-ui/react';
import React from 'react';

export type WrapperVariant = 'small' | 'regular';

interface WrapperProps {
    variant?: WrapperVariant;
}

const MainWrapper: React.FC<WrapperProps> = ({ children, variant = 'regular' }) => {
    return (
        <Box maxWidth={variant === 'regular' ? '68rem' : '34rem'} margin="0 auto">
            {children}
        </Box>
    );
};

export default MainWrapper;
