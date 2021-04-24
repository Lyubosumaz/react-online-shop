import { MainWrapper } from '@/layouts/MainWrapper';
import { useColorModeValue, useToken } from '@chakra-ui/react';
import { FC } from 'react';
import CopyRights from './CopyRights';
import ShopDetails from './ShopDetails';
import { UtilityLinks } from './UtilityLinks';

export const Footer: FC<{}> = ({ }) => {
    const [lightColor, darkColor] = useToken("colors", ["#100703", "primaryD.900"]);
    const bgColor = useColorModeValue(lightColor, darkColor);

    return (
        // TODO theme have big palettes without '#100703'
        <footer style={{
            backgroundColor: bgColor,
            color: 'white'
        }}>
            <MainWrapper>
                <ShopDetails />
                <UtilityLinks />
            </MainWrapper>
            <CopyRights />
        </footer>
    );
};
