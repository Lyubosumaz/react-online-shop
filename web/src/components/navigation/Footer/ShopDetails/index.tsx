import { List, ListIcon, ListItem } from '@chakra-ui/react';
import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ShopDetails: React.FC<{}> = ({}) => {
    return (
        <List padding="8rem 0 4rem 0" display="flex" justifyContent="space-around">
            <ListItem>
                <ListIcon as={FaMapMarkerAlt} boxSize={6} mr={3} />
                Lorem lpusm hosting web
            </ListItem>
            <ListItem>
                <ListIcon as={FaPhoneAlt} boxSize={6} mr={3} />
                Call: +7586656566
            </ListItem>
            <ListItem>
                <ListIcon as={FaEnvelope} boxSize={6} mr={3} />
                demo@mail.com
            </ListItem>
        </List>
    );
};

export default ShopDetails;
