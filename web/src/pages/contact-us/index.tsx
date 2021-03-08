import ColumnWrapper from '@/layouts/ColumnWrapper';
import MainLayout from '@/layouts/MainLayout';
import { withApollo } from '@/utils/withApollo';
import React from 'react';

const ContactUs: React.FC<{}> = ({ }) => {
    return (
        <MainLayout>
            <ColumnWrapper
                left={<div>Form</div>}
                right={<div style={{ width: "540px", height: "370px", display: "flex", justifyContent: "center", alignItems: "center", background: "gray" }}><span>Google Map</span></div>}
            />
        </MainLayout>
    );
};

export default withApollo({ ssr: true })(ContactUs);