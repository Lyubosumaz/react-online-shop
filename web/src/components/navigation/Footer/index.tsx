import React from 'react';
import MainWrapper from '../../../layouts/MainWrapper';
import CopyRights from './CopyRights';
import ShopDetails from './ShopDetails';
import UtilityLinks from './UtilityLinks';

const Footer: React.FC<{}> = ({}) => {
    return (
        <footer style={{ backgroundColor: '#100703', color: '#fcfcfc' }}>
            <MainWrapper>
                <ShopDetails />
                <UtilityLinks />
            </MainWrapper>
            <CopyRights />
        </footer>
    );
};

export default Footer;
