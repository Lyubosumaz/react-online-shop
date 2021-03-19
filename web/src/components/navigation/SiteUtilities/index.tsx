import ColorMode from '@/components/buttons/ColorMode';
import LangSelect from '@/components/buttons/LangSelect';
import { ListItem } from '@chakra-ui/layout';
import { List } from '@chakra-ui/react';
import React from 'react';

const SiteUtilities: React.FC<{ distance: number }> = ({ distance }) => {
    return (
        <List d="flex">
            <ListItem mr={distance}><LangSelect /></ListItem>
            <ListItem><ColorMode control="custom" /></ListItem>
        </List>
    );
};

export default SiteUtilities;
