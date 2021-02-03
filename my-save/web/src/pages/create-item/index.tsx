import { withUrqlClient } from 'next-urql';
import React, { useState } from 'react';
import btn from '../../components/buttons/buttons-text.json';
import MainButton from '../../components/buttons/MainButton';
import FieldFactory from '../../components/form/FieldFactory';
import ButtonWrapper from '../../layouts/ButtonWrapper';
import FormWrapper from '../../layouts/FormWrapper';
import { createUrqlClient } from '../../utils/createUrqlClient';
import { useIsAuth } from '../../utils/useIsAuth';

const CreateItem: React.FC<{}> = ({}) => {
    useIsAuth();

    const [btnName, setBtnName] = useState('');

    const handleCallback = (arg: string) => {
        setBtnName(arg);
    };

    return (
        <>
            <FormWrapper exactBtn={btnName}>
                <FieldFactory fieldName={`title`} />

                <FieldFactory fieldName={`description`} />

                <ButtonWrapper>
                    <MainButton text={btn.createItem} type={'submit'} callback={handleCallback} />
                </ButtonWrapper>
            </FormWrapper>
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(CreateItem);
