import { getLanguageIcon, _languages } from "@/utils/flagIconController";
import { Button, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Tooltip, useColorModeValue, useToken } from '@chakra-ui/react';
import { FC, useState } from 'react';

// TODO button for translate site
export const LangSelect: FC<{}> = ({ }) => {
    const [lang, setLanguage] = useState("en")
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
                    _hover={{ bg: 'secondaryL.100' }}
                    _active={{ bg: 'secondaryL.100' }}
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
