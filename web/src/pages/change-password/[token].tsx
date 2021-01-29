// import { NextPage } from 'next';
import { withUrqlClient } from 'next-urql';
import NextLink from 'next/link';
import React, { useState } from 'react';
import btn from '../../components/buttons/buttons-text.json';
import MainButton from '../../components/buttons/MainButton';
import FieldFactory from '../../components/form/FieldFactory';
import ButtonWrapper from '../../layouts/ButtonWrapper';
import FormWrapper from '../../layouts/FormWrapper';
import { createUrqlClient } from '../../utils/createUrqlClient';

interface ErrType {
    [key: string]: string;
}

const ChangePassword: React.FC<{}> = () => {
    // const [errors, setErrors] = useState({} as ErrType);

    const [btnName, setBtnName] = useState({});

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
                    <MainButton text={btn.changePassword} type={'submit'} callback={handleCallback} />
                    <NextLink href="/forgotten-password">forgot password?</NextLink>
                    {/* {errors['token'] ? <div>{errors['token']}</div> : <div>123</div>} */}
                </ButtonWrapper>
            </FormWrapper>
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(ChangePassword);
