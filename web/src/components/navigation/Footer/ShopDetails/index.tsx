import { Box, List, ListIcon, ListItem } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const SiteInformationItem: React.FC<{ icon: IconType }> = ({ children, icon }) => (
    <ListItem>
        <ListIcon as={icon} boxSize={6} mr={3} />
        <Box
            as="span"
            cursor="pointer"
            _hover={{
                color: "primaryL.700",
                transition: "0.5s ease-in-out"
            }}
        >{children}</Box>
    </ListItem>
);

const ShopDetails: React.FC<{}> = ({ }) => {
    return (
        <List padding="8rem 0 4rem 0" display="flex" justifyContent="space-around">
            {/* TODO these items should link: map, call, email */}
            <SiteInformationItem icon={FaMapMarkerAlt}>Lorem lpusm hosting web</SiteInformationItem>
            <SiteInformationItem icon={FaPhoneAlt}>Call: +7586656566</SiteInformationItem>
            <SiteInformationItem icon={FaEnvelope}>demo@mail.com</SiteInformationItem>
        </List>
    );
};

export default ShopDetails;
