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
            key="color_mode_button"
            aria-label="Color Mode"
            fontSize="1.5rem"
            icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
            color="inherit"
            bgColor="inherit"
            _hover={control === 'regular'
                ? { bgColor: colorMode === 'light' ? 'teal.600' : 'teal.300' }
                : { bgColor: 'secondaryL.100', color: 'primaryL.700' }
            }
        />
    );
};

export default ColorMode;
