import React, { useEffect, useState } from 'react';
import { Field } from 'react-final-form';
import Spinner from '../../loading/Spinner';
import styles from './FieldFactory.module.scss';

interface FieldFactoryProps {
    fieldName: string;
    fieldLabel?: string | null;
    fieldType?: string;
    fieldPlaceholder?: string;
    fieldError?: any;
}

const FieldFactory: React.FC<FieldFactoryProps> = ({ fieldName, fieldLabel, fieldType, fieldPlaceholder, fieldError }) => {
    const required = (value: any) => (value ? undefined : 'Required');
    // const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), undefined);
    const realLabel = fieldLabel === null ? '' : !fieldLabel ? (fieldLabel = fieldName.charAt(0).toUpperCase() + fieldName.slice(1)) : fieldLabel;
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
                    <div className={styles[`input-field`]}>
                        <div className={styles[`input-inner-wrapper`]}>
                            <label className={styles[`input-label`]}>{realLabel}:</label>
                            <input className={styles[`input-input`]} {...input} type={realType} placeholder={realPlaceholder} />
                            {meta.error && meta.touched ? <div className={[styles[`error-bar`], `error-touched`].join(' ')}>{meta.error}</div> : <div className={[styles[`error-bar`], `error-touched`].join(' ')}>err RFF</div>}
                            {fetchErr[fieldName] ? <div className={[styles[`error-bar`], `error-fetched`].join(' ')}>{fetchErr[fieldName]}</div> : <div className={[styles[`error-bar`], `error-fetched`].join(' ')}>err BE</div>}
                            {meta.validating ? <Spinner /> : <div>loading</div>}
                        </div>
                    </div>
                )}
            </Field>
        </>
    );
};

export default FieldFactory;
