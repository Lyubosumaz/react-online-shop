import { Logo } from '@/components/Logo';
import { NavBar } from '@/components/navigation/NavBar';
import { MainWrapper } from '@/layouts/MainWrapper';
import { Box, Flex, useStyleConfig } from '@chakra-ui/react';
import { FC } from 'react';

export const MainHeader: FC<{}> = ({ }) => {
    const mainHeader = useStyleConfig("MainHeader");

    return (
        <header>
            <Box sx={mainHeader}>
                <MainWrapper>
                    <Flex justify="space-between" align="center" >
                        <Logo />
                        <NavBar />
                    </Flex>
                </MainWrapper>
            </Box>
        </header>
    );
};
