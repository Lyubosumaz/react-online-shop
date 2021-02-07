import { List, ListIcon, ListItem } from '@chakra-ui/react';
import React from 'react';
import { FaMapMarkerAlt, FaMobileAlt, FaPhoneAlt } from 'react-icons/fa';

const ShopDetails: React.FC<{}> = ({}) => {
    return (
        <List display="flex" justifyContent="space-around">
            <ListItem>
                <ListIcon as={FaMapMarkerAlt} boxSize={6} color="green.500" />
                Lorem lpusm hosting web
            </ListItem>
            <ListItem>
                <ListIcon as={FaMobileAlt} boxSize={6} color="green.500" />
                Call: +7586656566
            </ListItem>
            <ListItem>
                <ListIcon as={FaPhoneAlt} boxSize={6} color="green.500" />
                demo@mail.com
            </ListItem>
        </List>
    );
};

export default ShopDetails;
