import { Box, Flex, useStyleConfig } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export type ColumnVariant = 'angles' | 'regular';
export type ColumnWrapperVariant = 'left' | 'right' | "both";
interface ColumnProps {
    variant?: ColumnVariant;
}
interface ColumnWrapperProps {
    left: ReactNode;
    right: ReactNode;
    borderLocation?: ColumnWrapperVariant;
}

const BorderedColumn: FC<{}> = ({ children }) => {
    const borderedColumn = useStyleConfig("BorderedColumn");

    return (
        <Box as="section" sx={borderedColumn}>{children}</Box>
    );
}

const Column: FC<ColumnProps> = ({ children, variant }) => {
    return (
        <Flex
            padding="0 1rem"
            justify="center"
            align="center"
            flexBasis="50%"
        >
            {variant === "regular" ?
                <Box as="section" w="100%">{children}</Box>
                :
                <BorderedColumn>{children}</BorderedColumn>
            }
        </Flex>
    )
}

export const ColumnWrapper: FC<ColumnWrapperProps> = ({ left, right, borderLocation }) => {
    return (
        <Flex p="6rem 0">
            <Column variant={borderLocation === "left" || borderLocation === "both" ? "angles" : "regular"}>{left}</Column>
            <Column variant={borderLocation === "right" || borderLocation === "both" ? "angles" : "regular"}>{right}</Column>
        </Flex>
    );
};
1