import MainWrapper from '@/layouts/MainWrapper';
import { useColorModeValue, useToken } from '@chakra-ui/react';
import React from 'react';
import CopyRights from './CopyRights';
import ShopDetails from './ShopDetails';
import UtilityLinks from './UtilityLinks';

const Footer: React.FC<{}> = ({ }) => {
    const [lightColor, darkColor] = useToken("colors", ["#100703", "primaryD.900"]);
    const bgColor = useColorModeValue(lightColor, darkColor);

    return (
        // TODO theme have big palettes without '#100703'
        <footer style={{
            // backgroundColor: '#100703',
            backgroundColor: bgColor,
            color: '#fcfcfc'
        }}>
            <MainWrapper>
                <ShopDetails />
                <UtilityLinks />
            </MainWrapper>
            <CopyRights />
        </footer>
    );
};

export default Footer;
