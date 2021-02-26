import Logo from '@/components/Logo';
import MainWrapper from '@/layouts/MainWrapper';
import { Box, Flex, useColorModeValue, useToken } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../NavBar';

const Header: React.FC<{}> = ({ }) => {
    const [lightColor, darkColor, txColor,] = useToken("colors", ["rosHeader.200", "rosHeader.900", "rosHeader.100"]);
    const bgColor = useColorModeValue(lightColor, darkColor);

    return (
        <header>
            <Box
                p="0.5rem 0"
                position="static"
                top="0"
                bgColor={bgColor}
                color={txColor}
                borderTop="0.75rem solid"
                borderBottom="0.75rem solid"
                borderColor="secondaryL.100"
                zIndex="1"
            >
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

export default Header;
