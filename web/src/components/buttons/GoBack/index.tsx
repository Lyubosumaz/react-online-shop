import { IconButton } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const GoBack: React.FC<{}> = ({}) => {
    const router = useRouter();

    return <IconButton aria-label="Click to go Back" icon={<FaArrowLeft />} onClick={() => router.back()} backgroundColor="#7c2c0c" _hover={{ backgroundColor: '#efe4d1', color: '#7c2c0c' }} />;
};

export default GoBack;
