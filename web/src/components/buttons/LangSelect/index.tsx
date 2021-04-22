import { SiteUtilitiesVariants } from "@/layouts/SiteUtilities";
import { getLanguageIcon, _languages } from "@/utils/flagIconController";
import { Button, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Tooltip, useColorMode, useColorModeValue, useStyleConfig, useToken } from '@chakra-ui/react';
import { FC, useState } from 'react';
interface LangSelectProps {
    appearance: SiteUtilitiesVariants;
}
// TODO button for translate site
export const LangSelect: FC<LangSelectProps> = ({ appearance }) => {
    const [lang, setLanguage] = useState("en")
    const { colorMode } = useColorMode();
    const [lightColor, darkColor] = useToken("colors", ["secondaryL.100", "primaryD.900"]);
    const txColor = useColorModeValue(darkColor, lightColor);

    const secondaryLangSelectButton = useStyleConfig("LangSelectButtonSecondary");
    const defaultLangSelectButton = useStyleConfig("LangSelectButtonDefault");

    const stylesState = (key: string) => {
        let styles;
        switch (key) {
            case "secondaryHeader":
                styles = secondaryLangSelectButton;
                break;
            default:
            case "default":
                styles = defaultLangSelectButton;
                break;
        }

        return styles;
    }

    return (
        <Menu>
            <Tooltip label="Language">
                <MenuButton
                    as={Button}
                    sx={stylesState(appearance)}
                >
                    <span role="img">{getLanguageIcon(lang)}</span>
                </MenuButton>
            </Tooltip>

            <MenuList
                p={0}
                rounded={0}
                color={txColor}
                boxShadow="0px 0.2rem 1.35rem rgb(0 0 0 / 25%)"
            >
                <MenuGroup title="Language/Език">
                    <MenuItem onClick={() => setLanguage(_languages.en.value)}>{_languages.en.name}</MenuItem>
                    <MenuItem onClick={() => setLanguage(_languages.bg.value)}>{_languages.bg.name}</MenuItem>
                    <MenuItem onClick={() => setLanguage(_languages.us.value)}>{_languages.us.name}</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    );
};
