import { Button, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';

const LangSelect: React.FC<{}> = ({ }) => {
    const [language, setLanguage] = useState("us")
    {/* TODO adding multiple languages */ }
    return (
        <Menu >
            <Tooltip label="Акаунт" fontSize="1.5rem">
                <MenuButton as={Button} variant="ghost">
                    <span role="img">🇺🇸</span>
                </MenuButton>
            </Tooltip>

            <MenuList p={0} rounded={0} boxShadow="0px 0.2rem 1.35rem rgb(0 0 0 / 25%)">
                <MenuGroup title="Language/Език">
                    <MenuItem _hover={{ textDecoration: "underline" }}>English</MenuItem>
                    <MenuItem _hover={{ textDecoration: "underline" }}>Bulgarian</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    );
};

export default LangSelect;
