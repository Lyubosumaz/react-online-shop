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
            color={control === 'regular'
                ? (colorMode === 'light' ? 'primaryD.50' : 'primaryD.900')
                : 'secondaryL.100'
            }
            backgroundColor={control === 'regular'
                ? (colorMode === 'light' ? 'teal.500' : 'teal.200')
                : 'primaryL.700'
            }
            _hover={control === 'regular'
                ? { backgroundColor: colorMode === 'light' ? 'teal.600' : 'teal.300' }
                : { backgroundColor: 'secondaryL.100', color: 'primaryL.700' }
            }
        />
    );
};

export default GoBack;
