import { Button, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';
import { dataLanguages, getFlagIcon } from "../../../utils/flagIconController";

const LangSelect: React.FC<{}> = ({ }) => {
    const [language, setLanguage] = useState("en")

    return (
        <Menu >
            <Tooltip label="Language">
                <MenuButton as={Button} variant="ghost">
                    <span role="img">{getFlagIcon(language)}</span>
                </MenuButton>
            </Tooltip>

            <MenuList p={0} rounded={0} boxShadow="0px 0.2rem 1.35rem rgb(0 0 0 / 25%)">
                <MenuGroup title="Language/Език">
                    <MenuItem onClick={() => setLanguage(dataLanguages.en.value)}>{dataLanguages.en.name}</MenuItem>
                    <MenuItem onClick={() => setLanguage(dataLanguages.bg.value)}>{dataLanguages.bg.name}</MenuItem>
                    <MenuItem onClick={() => setLanguage(dataLanguages.us.value)}>{dataLanguages.us.name}</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    );
};

export default LangSelect;
