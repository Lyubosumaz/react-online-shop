import { Box, List, ListIcon, ListItem } from '@chakra-ui/react';
import { FC } from 'react';
import { IconType } from 'react-icons';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import styles from "./keyframes-shake.module.css";

const SiteInformationItem: FC<{ icon: IconType }> = ({ children, icon }) => (
    <ListItem className={styles.icon}>
        <ListIcon
            as={icon} boxSize={6} mr={3} />
        <Box
            as="span"
            cursor="pointer"
            _hover={{
                color: "primaryL.700",
                transition: "0.375s ease-in-out"
            }}
        >
            {children}
        </Box>
    </ListItem>
);

const ShopDetails: FC<{}> = ({ }) => {
    return (
        <List p="7.5rem 0 2.75rem 0" display="flex" justifyContent="space-around">
            {/* TODO these items should link: map, call, email */}
            <SiteInformationItem icon={FaMapMarkerAlt}>Lorem lpusm hosting web</SiteInformationItem>
            <SiteInformationItem icon={FaPhoneAlt}>Call: +7586656566</SiteInformationItem>
            <SiteInformationItem icon={FaEnvelope}>demo@mail.com</SiteInformationItem>
        </List>
    );
};

export default ShopDetails;
