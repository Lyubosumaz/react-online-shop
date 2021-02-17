import { IconButton, useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

interface GoBackProps {
    control?: 'custom' | 'regular';
}

const GoBack: React.FC<GoBackProps> = ({ control = 'regular' }) => {
    const router = useRouter();
    const { colorMode } = useColorMode();

    return (
        <IconButton
            aria-label="Click to go Back"
            icon={<FaArrowLeft />}
            onClick={() => router.back()}
            // custom styles
            color={control === 'regular' ? (colorMode === 'light' ? '#fff' : '#1A202C') : '#efe4d1'}
            backgroundColor={control === 'regular' ? (colorMode === 'light' ? 'teal.500' : 'teal.200') : '#7c2c0c'}
            _hover={control === 'regular' ? { backgroundColor: colorMode === 'light' ? 'teal.600' : 'teal.300' } : { backgroundColor: '#efe4d1', color: '#7c2c0c' }}
        />
    );
};

export default GoBack;