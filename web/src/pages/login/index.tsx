import { withUrqlClient } from 'next-urql';
import React, { useState } from 'react';
import btn from '../../components/buttons/buttons-text.json';
import MainButton from '../../components/buttons/MainButton';
import FieldFactory from '../../components/form/FieldFactory';
import ButtonWrapper from '../../layouts/ButtonWrapper';
import FormWrapper from '../../layouts/FormWrapper';
import { createUrqlClient } from '../../utils/createUrqlClient';

const Login: React.FC<{}> = ({}) => {
    const [btnName, setBtnName] = useState({});

    const handleCallback = (arg: string) => {
        setBtnName(arg);
    };
    return (
        <>
            <FormWrapper exactBtn={btnName}>
                <FieldFactory fieldName={`usernameOrEmail`} fieldLabel={'Username or Email'} fieldPlaceholder={`John Doe or john@doe.com`} />

                <FieldFactory fieldName={`password`} fieldType={`password`} fieldPlaceholder={`********`} />

                <ButtonWrapper>
                    <MainButton text={btn.login} type={'submit'} callback={handleCallback} />
                </ButtonWrapper>
            </FormWrapper>
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Login);
