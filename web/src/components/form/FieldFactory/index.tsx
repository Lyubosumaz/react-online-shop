import React, { useEffect, useState } from 'react';
import { Field } from 'react-final-form';
import Spinner from '../../loading/Spinner';

interface FieldFactoryProps {
    fieldName: string;
    fieldLabel?: string;
    fieldType?: string;
    fieldPlaceholder?: string;
    fieldError?: any;
}

const FieldFactory: React.FC<FieldFactoryProps> = ({ fieldName, fieldLabel, fieldType, fieldPlaceholder, fieldError }) => {
    const required = (value: any) => (value ? undefined : 'Required');
    // const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), undefined);
    const realLabel = fieldLabel ? fieldLabel : '';
    const realType = fieldType ? fieldType : 'text';
    const realPlaceholder = fieldPlaceholder ? fieldPlaceholder : '';
    const propError = fieldError;
    const [fetchErr, setFetchErr] = useState({} as any);

    useEffect(() => {
        setFetchErr(fieldError);
    }, [propError]);

    return (
        <>
            <Field name={fieldName} validate={required}>
                {({ input, meta }) => (
                    <div>
                        <label>{realLabel}</label>
                        <input {...input} type={realType} placeholder={realPlaceholder} />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                        {fetchErr[fieldName] ? <div>{fetchErr[fieldName]}</div> : <div>123</div>}
                        {meta.validating && <Spinner />}
                    </div>
                )}
            </Field>
        </>
    );
};

export default FieldFactory;
