import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

interface ColorModeProps {
    control?: 'custom' | 'regular';
}

const ColorMode: React.FC<ColorModeProps> = ({ control = 'regular' }) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            aria-label="Color Mode"
            icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
            // custom styles
            color={control === 'regular' ? (colorMode === 'light' ? '#fff' : '#1A202C') : '#efe4d1'}
            backgroundColor={control === 'regular' ? (colorMode === 'light' ? 'teal.500' : 'teal.200') : '#7c2c0c'}
            _hover={control === 'regular' ? { backgroundColor: colorMode === 'light' ? 'teal.600' : 'teal.300' } : { backgroundColor: '#efe4d1', color: '#7c2c0c' }}
        />
    );
};

export default ColorMode;
