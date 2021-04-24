import { Box } from '@chakra-ui/react';
import { FC } from 'react';

export type WrapperSize = 'small' | 'medium' | 'regular';
export type WrapperVariant = 'form' | 'element';

interface WrapperProps {
    size?: WrapperSize;
    variant?: WrapperVariant;
}

export const MainWrapper: FC<WrapperProps> = ({ children, size = 'regular', variant = 'element' }) => {
    return (
        <Box
            maxW={
                size === 'regular'
                    ? '72rem'
                    : size === 'medium' ? '50rem' : '34rem'
            }
            m="0 auto"
            p={variant === 'element' ? '0' : '4em 0'}
        >
            {children}
        </Box>
    );
};
