import { Footer } from '@/components/navigation/Footer';
import { MainHeader } from '@/components/navigation/MainHeader';
import Main from '@/layouts/MainBody';
import React from 'react';

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
