import { ActionButtons } from '@/lib/chakra-ui/component-styles/ActionButtons';
import { BorderedColumn } from '@/lib/chakra-ui/component-styles/BorderedColumn';
import { ColorModeButtonMain, ColorModeButtonSecondary } from '@/lib/chakra-ui/component-styles/ColorModeButtons';
import { GoBackButtonDefault, GoBackButtonProduct, GoBackButtonSecondary } from '@/lib/chakra-ui/component-styles/GoBackButtons';
import { LangSelectButtonDefault, LangSelectButtonSecondary, LangSelectDropdown } from '@/lib/chakra-ui/component-styles/LangSelectButtons';
import { LogoutButtons } from '@/lib/chakra-ui/component-styles/LogoutButtons';
import { Card } from '@/lib/chakra-ui/component-styles/NavBarButton';
import { customizeTheme } from '@/lib/chakra-ui/customize-theme/customizeTheme';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    ...customizeTheme,
    icons: {
        logo: {
            path: (
                <svg width="3000" height="3163" viewBox="0 0 3000 3163" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <rect width="3000" height="3162.95" fill="none" />
                    <path d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z" fill="currentColor" />
                </svg>

            ),
            viewBox: '0 0 3000 3163',
        },
    },
    components: {
        Card,
        ActionButtons,
        LogoutButtons,
        ColorModeButtonMain,
        ColorModeButtonSecondary,
        GoBackButtonDefault,
        GoBackButtonSecondary,
        GoBackButtonProduct,
        LangSelectButtonSecondary,
        LangSelectButtonDefault,
        LangSelectDropdown,
        BorderedColumn,
    },
} as any);

export default theme;
