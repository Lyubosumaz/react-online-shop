import React, { useEffect, useRef, useState } from 'react';
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
    const realLabel = fieldLabel === null ? '' : !fieldLabel ? (fieldLabel = fieldName.charAt(0).toUpperCase() + fieldName.slice(1)) : fieldLabel;
    const realType = fieldType ? fieldType : 'text';
    const realPlaceholder = fieldPlaceholder ? fieldPlaceholder : '';
    const propError = fieldError;
    const [fetchErr, setFetchErr] = useState({} as any);
    const [isFocus, setIsFocus] = useState(false);
    const styleBorderColor = isFocus ? styles[`border-color`] : '';
    const [emptyField, setEmptyField] = useState(false);
    const styleEmptyField = emptyField ? styles['empty-field'] : '';
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setFetchErr(fieldError);
    }, [propError]);

    const handleInputFocus = () => {
        setEmptyField(false);
        setIsFocus(true);
    };

    const handleInputBlur = (inputValue: any) => {
        if (!inputValue) {
            setEmptyField(true);
        } else {
            setEmptyField(false);
        }
        setIsFocus(false);
    };

    const focusInputField = () => {
        if (inputRef && inputRef.current) inputRef.current.focus();
    };

    return (
        <>
            <Field name={fieldName}>
                {({ input, meta }) => (
                    <section className={styles[`input-field`]}>
                        <div className={styles[`input-inner-wrapper`]}>
                            <label className={styles[`input-label`]} onClick={focusInputField}>
                                {realLabel}:
                            </label>

                            <div className={styles[`input-input-wrapper`]} onClick={focusInputField}>
                                {meta.validating ? (
                                    <Spinner />
                                ) : (
                                    <div className={[styles.icon, styleBorderColor, styleEmptyField].join(' ')}>
                                        <span>Q</span>
                                    </div>
                                )}

                                <input ref={inputRef} className={[styles[`input-input`], styleBorderColor, styleEmptyField].join(' ')} {...input} type={realType} placeholder={realPlaceholder} onFocus={handleInputFocus} onBlur={() => handleInputBlur(input.value)} />

                                {emptyField ? (
                                    <div className={[styles[`error-touched`], styleBorderColor, styleEmptyField].join(' ')}>
                                        <span>{'Required'}</span>
                                    </div>
                                ) : (
                                    <div className={[styles[`error-touched`], styleBorderColor, styleEmptyField].join(' ')}>
                                        <span>{''}</span>
                                    </div>
                                )}
                            </div>

                            {fetchErr[fieldName] ? (
                                <div className={styles[`error-fetched`]}>
                                    <span>{fetchErr[fieldName]}</span>
                                </div>
                            ) : (
                                <div className={styles[`error-fetched`]}>
                                    <span className={styles[`not-visible`]}>Error:</span>
                                </div>
                            )}
                        </div>
                    </section>
                )}
            </Field>
        </>
    );
};

export default FieldFactory;
