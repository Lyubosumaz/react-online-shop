import ColorMode from '@/components/buttons/ColorMode';
import LangSelect from '@/components/buttons/LangSelect';
import { ListItem } from '@chakra-ui/layout';
import React from 'react';

const SiteUtilities: React.FC<{}> = ({ }) => {
    return (
        <>
            <ListItem><LangSelect /></ListItem>
            <ListItem><ColorMode control="custom" /></ListItem>
        </>
    );
};

export default SiteUtilities;
