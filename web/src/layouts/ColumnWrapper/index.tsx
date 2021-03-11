import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import styles from './column-wrapper.module.css';

export type ColumnVariant = 'angles' | 'regular';
interface ColumnProps {
    variant?: ColumnVariant;
}

const Column: React.FC<ColumnProps> = ({ children, variant = 'regular' }) => (
    <Flex padding="0 1rem" justifyContent="center" alignItems="center" flexBasis="50%">
        <div className={variant === "angles" ? styles.angles : ""}>
            {children}
        </div>
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
