import { Footer } from '@/components/navigation/Footer';
import { MainHeader } from '@/components/navigation/MainHeader';
import React from 'react';
import Main from '../MainBody';

const MainLayout: React.FC<{}> = ({ children }) => {
    return (
        <>
            <MainHeader />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};

export default MainLayout;
