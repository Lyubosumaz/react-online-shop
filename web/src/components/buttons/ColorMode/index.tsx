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
            ml={4}
            aria-label="Color Mode"
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
