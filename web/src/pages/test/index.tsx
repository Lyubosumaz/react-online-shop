import { withUrqlClient } from 'next-urql';
import React from 'react';
import MainButton from '../../components/buttons/MainButton';
import FieldFactory from '../../components/form/FieldFactory';
import FormWrapper from '../../layouts/FormWrapper';
import styles from '../../styles/scss/Forms.module.scss';
import { createUrqlClient } from '../../utils/createUrqlClient';

const Register: React.FC<{}> = ({}) => {
    return (
        <>
            <FormWrapper>
                <FieldFactory fieldName={`username8`} fieldLabel={`Username8`} fieldType={`text`} fieldPlaceholder={`88`} />

                <FieldFactory fieldName={`password8`} fieldLabel={`Password8`} fieldType={`password`} fieldPlaceholder={`88--`} />

                <div className={styles[`button-wrapper`]}>
                    <MainButton text={'Register'} type={'submit'} />
                </div>
            </FormWrapper>
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Register);
