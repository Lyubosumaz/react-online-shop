import { withUrqlClient } from 'next-urql';
import React, { useState } from 'react';
import btn from '../../components/buttons/buttons-text.json';
import MainButton from '../../components/buttons/MainButton';
import FieldFactory from '../../components/form/FieldFactory';
import ButtonWrapper from '../../layouts/ButtonWrapper';
import FormWrapper from '../../layouts/FormWrapper';
import { createUrqlClient } from '../../utils/createUrqlClient';

const Register: React.FC<{}> = ({}) => {
    const [btnName, setBtnName] = useState('');

    const handleCallback = (arg: string) => {
        setBtnName(arg);
    };

    return (
        <>
            <FormWrapper exactBtn={btnName}>
                <FieldFactory fieldName={`username`} fieldPlaceholder={`John Doe`} />

                <FieldFactory fieldName={`email`} fieldPlaceholder={`john@doe.com`} />

                <FieldFactory fieldName={`password`} fieldType={`password`} fieldPlaceholder={`********`} />

                <ButtonWrapper>
                    <MainButton text={btn.register} type={'submit'} callback={handleCallback} />
                </ButtonWrapper>
            </FormWrapper>
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Register);
