import { ColorMode } from '@/components/buttons/ColorMode';
import { LangSelect } from '@/components/buttons/LangSelect';
import { ListItem } from '@chakra-ui/layout';
import { List } from '@chakra-ui/react';
import { FC } from 'react';

export type SiteUtilitiesVariants = 'secondaryHeader' | 'default';
interface SiteUtilitiesProps {
    distance: number;
    variant?: SiteUtilitiesVariants;
}

export const SiteUtilities: FC<SiteUtilitiesProps> = ({ distance, variant = "default" }) => {
    const components = [
        <LangSelect appearance={variant} />,
        <ColorMode appearance={variant} />,
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
                    );
                })
                : null
            }
        </List>
    );
};
