import ColorMode from '@/components/buttons/ColorMode';
import GoBack from '@/components/buttons/GoBack';
import LangSelect from '@/components/buttons/LangSelect';
import MainWrapper from '@/layouts/MainWrapper';
import { List, ListItem } from '@chakra-ui/react';
import { FC } from 'react';

export type goBackButtonStatus = 'visible' | 'hidden';
interface SecondaryHeaderProps {
    goBackButton?: goBackButtonStatus;
}

const SecondaryHeader: FC<SecondaryHeaderProps> = ({ goBackButton = 'visible' }) => {
    return (
        <header
            style={{
                padding: '1rem 0',
                borderBottom: '0.15rem solid #2C7A7B'
            }}
        >
            <MainWrapper size="medium">
                <List display="flex" justifyContent="space-between">
                    <ListItem>{goBackButton === 'visible' ? <GoBack /> : null}</ListItem>

                    <ListItem>
                        <List display="flex" justifyContent="space-between">
                            <ListItem>
                                <LangSelect />
                            </ListItem>

                            <ListItem ml={4}>
                                <ColorMode />
                            </ListItem>
                        </List>
                    </ListItem>
                </List>
            </MainWrapper>
        </header>
    );
};

export default SecondaryHeader;
