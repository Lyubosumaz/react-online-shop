import { IconButton, Menu, MenuButton, MenuItem, MenuList, Select, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const LangSelect: React.FC<{}> = ({ }) => {
    {/* TODO adding multiple languages */ }
    return (
        <>
            <Select placeholder="Language" >
                <option value="english">English</option>
                <option value="bulgarian">Bulgarian</option>
            </Select>

            <Menu >
                <Tooltip label="Акаунт" fontSize="1.5rem">
                    <MenuButton
                        as={IconButton}
                        boxSize="3rem"
                        fontSize="2.3rem"
                        icon={<FaUserAlt />}
                        aria-label="Акаунт"
                        bgColor="transparent"
                    />
                </Tooltip>

                <MenuList p={0} rounded={0} boxShadow="0px 0.2rem 1.35rem rgb(0 0 0 / 25%)">
                    <MenuItem _hover={{ textDecoration: "underline" }}>Вход</MenuItem>
                    <MenuItem _hover={{ textDecoration: "underline" }}>Регистрация</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};

export default LangSelect;
