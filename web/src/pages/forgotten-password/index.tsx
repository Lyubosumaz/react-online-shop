import { withUrqlClient } from 'next-urql';
import React, { useState } from 'react';
import btn from '../../components/buttons/buttons-text.json';
import MainButton from '../../components/buttons/MainButton';
import FieldFactory from '../../components/form/FieldFactory';
import ButtonWrapper from '../../layouts/ButtonWrapper';
import FormWrapper from '../../layouts/FormWrapper';
import { createUrqlClient } from '../../utils/createUrqlClient';

const forgottenPassword: React.FC<{}> = ({}) => {
    const [btnName, setBtnName] = useState({});

    const handleCallback = (arg: string) => {
        setBtnName(arg);
    };

    return (
        <>
            <FormWrapper exactBtn={btnName}>
                <FieldFactory fieldName={`email`} fieldPlaceholder={`Your account email`} />

                <ButtonWrapper>
                    <MainButton text={btn.forgottenPassword} type={'submit'} callback={handleCallback} />
                </ButtonWrapper>
            </FormWrapper>
        </>
    );
};

export default withUrqlClient(createUrqlClient)(forgottenPassword);
