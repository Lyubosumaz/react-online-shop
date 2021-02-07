import React from 'react';
import CopyRights from './CopyRights';
import ShopDetails from './ShopDetails';
import UtilityLinks from './UtilityLinks';

const Footer: React.FC<{}> = ({}) => {
    return (
        <footer>
            <ShopDetails />
            <UtilityLinks />
            <CopyRights />
        </footer>
    );
};

export default Footer;
