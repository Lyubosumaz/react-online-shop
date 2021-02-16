import { List, ListItem } from '@chakra-ui/react';
import React from 'react';
import MainWrapper from '../../../layouts/MainWrapper';
import ColorMode from '../../buttons/ColorMode';
import GoBack from '../../buttons/GoBack';

const SecondaryHeader: React.FC<{}> = ({}) => {
    return (
        <header style={{ margin: '1rem 0' }}>
            <MainWrapper>
                <List display="flex" justifyContent="space-between">
                    <ListItem>
                        <GoBack />
                    </ListItem>

                    <ListItem>
                        <ColorMode />
                    </ListItem>
                </List>
            </MainWrapper>
        </header>
    );
};

export default SecondaryHeader;
