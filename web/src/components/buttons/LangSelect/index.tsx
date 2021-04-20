import { SiteUtilitiesVariants } from "@/layouts/SiteUtilities";
import { getLanguageIcon, _languages } from "@/utils/flagIconController";
import { Button, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Tooltip, useColorMode, useColorModeValue, useToken } from '@chakra-ui/react';
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

    return (
        <Menu>
            <Tooltip label="Language">
                <MenuButton
                    as={Button}
                    p="0 0.75rem"
                    variant="ghost"
                    fontSize="1.5rem"
                    _hover={appearance === 'secondaryHeader'
                        ? { bg: colorMode === 'light' ? 'teal.600' : 'teal.300' }
                        : { bg: 'secondaryL.100', color: 'primaryL.700' }
                    }
                    _active={appearance === 'secondaryHeader'
                        ? { bg: colorMode === 'light' ? 'teal.600' : 'teal.300' }
                        : { bg: 'secondaryL.100', color: 'primaryL.700' }
                    }
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
