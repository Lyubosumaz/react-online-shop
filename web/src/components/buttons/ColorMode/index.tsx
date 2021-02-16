import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorMode: React.FC<{}> = ({}) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return <IconButton aria-label="Color Mode" icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} backgroundColor="#7c2c0c" _hover={{ backgroundColor: '#efe4d1', color: '#7c2c0c' }} />;
};

export default ColorMode;
