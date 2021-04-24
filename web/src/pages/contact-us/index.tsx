import { ColumnWrapper } from '@/layouts/ColumnWrapper';
import MainLayout from '@/layouts/MainLayout';
import { withApollo } from '@/utils/withApollo';
import React from 'react';
import ContactUsForm from './ContactUsForm';
import ContactUsMap from './ContactUsMap';

const ContactUs: React.FC<{}> = ({ }) => {
    return (
        <MainLayout>
            <ColumnWrapper
                left={<ContactUsForm />}
                right={<ContactUsMap />}
            />
        </MainLayout>
    );
};

export default withApollo({ ssr: true })(ContactUs);