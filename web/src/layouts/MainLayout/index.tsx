import { Footer } from '@/components/navigation/Footer';
import { MainHeader } from '@/components/navigation/MainHeader';
import { MainBody } from '@/layouts/MainBody';
import React from 'react';

const MainLayout: React.FC<{}> = ({ children }) => {
    return (
        <>
            <MainHeader />
            <MainBody>{children}</MainBody>
            <Footer />
        </>
    );
};

export default MainLayout;
