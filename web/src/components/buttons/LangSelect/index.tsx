import { SiteUtilitiesVariants } from "@/layouts/SiteUtilities";
import { getLanguageIcon, _languages } from "@/utils/flagIconController";
import { Box, Button, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Tooltip, useStyleConfig } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
interface LangSelectProps {
    appearance: SiteUtilitiesVariants;
}
// TODO button for translate site
export const LangSelect: FC<LangSelectProps> = ({ appearance }) => {
    const [lang, setLanguage] = useState("en")
    const secondaryLangSelectButton = useStyleConfig("LangSelectButtonSecondary");
    const defaultLangSelectButton = useStyleConfig("LangSelectButtonDefault");
    const langSelectDropdown = useStyleConfig("LangSelectDropdown");

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
                    <Box as="span" role="img">{getLanguageIcon(lang)}</Box>
                </MenuButton>
            </Tooltip>

            <MenuList sx={langSelectDropdown}>
                <MenuGroup title="Language/Език">
                    <MenuItem onClick={() => setLanguage(_languages.en.value)}>{_languages.en.name}</MenuItem>
                    <MenuItem onClick={() => setLanguage(_languages.bg.value)}>{_languages.bg.name}</MenuItem>
                    <MenuItem onClick={() => setLanguage(_languages.us.value)}>{_languages.us.name}</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    );
};
