import { GoBack } from '@/components/buttons/GoBack';
import MainWrapper from '@/layouts/MainWrapper';
import { SiteUtilities } from '@/layouts/SiteUtilities';
import { List, ListItem } from '@chakra-ui/react';
import { FC } from 'react';

export type variantGoBackButton = 'visible' | 'hidden';
interface SecondaryHeaderProps {
    goBackButton?: variantGoBackButton;
}

export const SecondaryHeader: FC<SecondaryHeaderProps> = ({ goBackButton = 'visible' }) => {
    return (
        <header
            style={{
                padding: '1rem 0',
                borderBottom: '0.15rem solid',
                borderColor: "#2C7A7B"
            }}
        >
            <MainWrapper size="medium">
                <List
                    display="flex"
                    justifyContent="space-between"
                >
                    <ListItem>
                        {goBackButton === 'visible'
                            ? <GoBack control="custom" />
                            : null
                        }
                    </ListItem>

                    <ListItem>
                        <SiteUtilities distance={4} />
                    </ListItem>
                </List>
            </MainWrapper>
        </header>
    );
};

