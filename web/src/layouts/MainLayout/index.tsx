import React from 'react';
import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import Main from '../MainBody';

const MainLayout: React.FC<{}> = ({ children }) => {
    return (
        <>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};

export default MainLayout;
