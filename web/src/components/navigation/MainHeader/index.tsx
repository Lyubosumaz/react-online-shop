import Logo from '@/components/Logo';
import { NavBar } from '@/components/navigation/NavBar';
import MainWrapper from '@/layouts/MainWrapper';
import { Box, Flex, useColorModeValue, useToken } from '@chakra-ui/react';
import { FC } from 'react';

export const MainHeader: FC<{}> = ({ }) => {
    const [lightColor, darkColor, txColor,] = useToken("colors", ["primaryL.700", "primaryD.500", "secondaryL.100"]);
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
