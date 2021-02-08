import { Box } from '@chakra-ui/react';
import React from 'react';

const MainWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box maxWidth="68rem" margin="0 auto">
            {children}
        </Box>
    );
};

export default MainWrapper;
