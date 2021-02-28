import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';


const Column: React.FC<{}> = ({ children }) => (
    <Flex padding="0 1rem" justifyContent="center" alignItems="center" flexBasis="50%">
        {children}
    </Flex>
);

const ColumnWrapper: React.FC<{ left: ReactNode, right: ReactNode }> = ({ left, right }) => {
    return (
        <Flex p="6rem 0">
            <Column>{left}</Column>
            <Column>{right}</Column>
        </Flex>
    );
};

export default ColumnWrapper;
