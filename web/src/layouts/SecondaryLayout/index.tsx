import React from 'react';
import SecondaryHeader from '../../components/navigation/SecondaryHeader';
import Main from '../MainBody';

const SecondaryLayout: React.FC<{}> = ({ children }) => {
    return (
        <>
            <SecondaryHeader />
            <Main size="small" variant="form">
                {children}
            </Main>
        </>
    );
};

export default SecondaryLayout;
