import { ColorMode } from '@/components/buttons/ColorMode';
import { LangSelect } from '@/components/buttons/LangSelect';
import { ListItem } from '@chakra-ui/layout';
import { List } from '@chakra-ui/react';
import { FC } from 'react';
interface SiteUtilitiesProps {
    distance: number
}

export const SiteUtilities: FC<SiteUtilitiesProps> = ({ distance }) => {
    const components = [
        <LangSelect />,
        <ColorMode control="custom" />,
    ]; // holds the different components 

    return (
        <List d="flex">
            {components.length
                ? components.map((component, index) => {
                    return (
                        <ListItem
                            key={index}
                            mr={components.length - 1 === index ? 0 : distance}
                        >
                            {component}
                        </ListItem>
                    )
                })
                : null
            }
        </List>
    );
};
