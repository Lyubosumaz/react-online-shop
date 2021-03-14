import { Box, Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export type ColumnVariant = 'angles' | 'regular';
interface ColumnProps {
    variant?: ColumnVariant;
}

const Column: React.FC<ColumnProps> = ({ children, variant = 'regular' }) => (
    <Flex padding="0 1rem" justifyContent="center" alignItems="center" flexBasis="50%">
        <Box
            margin="2.15rem"
            padding="2rem 3.5rem"
            position="relative"
            border="0.1rem solid"
            borderColor="#7c2c0c"
            _before={{
                width: "6.5rem",
                height: "6.5rem",
                content: '""',
                display: "block",
                position: "absolute",
                top: "-2.15rem",
                left: "-2.15rem",
                borderTop: "0.85rem solid",
                borderLeft: "0.85rem solid",
                borderColor: "#7c2c0c"
            }}
            _after={{
                width: "6.5rem",
                height: "6.5rem",
                content: '""',
                display: "block",
                position: "absolute",
                right: "-2.15rem",
                bottom: "-2.15rem",
                borderRight: "0.85rem solid",
                borderBottom: "0.85rem solid",
                borderColor: "#7c2c0c"
            }}
        >
            {children}
        </Box>
    </Flex>
);

const ColumnWrapper: React.FC<{ left: ReactNode, right: ReactNode }> = ({ left, right }) => {
    return (
        <Flex p="6rem 0">
            <Column variant="angles">{left}</Column>
            <Column>{right}</Column>
        </Flex>
    );
};

export default ColumnWrapper;
