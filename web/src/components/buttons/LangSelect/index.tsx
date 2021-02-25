import { Button, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';

const LangSelect: React.FC<{}> = ({ }) => {
    const [language, setLanguage] = useState("us")

    const langIcon = (lang) => {
        switch (lang) {
            case "us":
                return "🇺🇸";
            case "bg":
                return '🇧🇬';
            default:
                break;
        }
    }

    return (
        <Menu >
            <Tooltip label="Language">
                <MenuButton as={Button} variant="ghost">
                    <span role="img">{langIcon(language)}</span>
                </MenuButton>
            </Tooltip>

            <MenuList p={0} rounded={0} boxShadow="0px 0.2rem 1.35rem rgb(0 0 0 / 25%)">
                <MenuGroup title="Language/Език">
                    <MenuItem onClick={() => setLanguage("us")}>English</MenuItem>
                    <MenuItem onClick={() => setLanguage("bg")}>Bulgarian</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    );
};

export default LangSelect;
