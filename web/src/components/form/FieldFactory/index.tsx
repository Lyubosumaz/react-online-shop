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
    const realLabel = fieldLabel === null ? '' : !fieldLabel ? (fieldLabel = fieldName.charAt(0).toUpperCase() + fieldName.slice(1)) : fieldLabel;
    const realType = fieldType ? fieldType : 'text';
    const realPlaceholder = fieldPlaceholder ? fieldPlaceholder : '';
    const propError = fieldError;
    const [fetchErr, setFetchErr] = useState({} as any);
    const [isFocus, setIsFocus] = useState(false);
    const styleBorderColor = isFocus ? styles[`border-color`] : '';
    const [emptyField, setEmptyField] = useState(false);

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

    return (
        <>
            <Field name={fieldName}>
                {({ input, meta }) => (
                    <section className={styles[`input-field`]}>
                        <div className={styles[`input-inner-wrapper`]}>
                            <label className={styles[`input-label`]}>{realLabel}:</label>

                            <div className={styles[`input-input-wrapper`]}>
                                {meta.validating ? (
                                    <Spinner />
                                ) : (
                                    <div className={[styles.icon, styleBorderColor].join(' ')}>
                                        <span>Q</span>
                                    </div>
                                )}

                                <input
                                    className={[styles[`input-input`], styleBorderColor].join(' ')}
                                    {...input}
                                    type={realType}
                                    placeholder={realPlaceholder}
                                    // TODO
                                    onFocus={handleInputFocus}
                                    onBlur={() => handleInputBlur(input.value)}
                                />

                                {emptyField ? (
                                    <div className={[styles[`error-touched`], styleBorderColor].join(' ')}>
                                        <span>{'Required'}</span>
                                    </div>
                                ) : (
                                    <div className={[styles[`error-touched`], styleBorderColor].join(' ')}>
                                        <span>{''}</span>
                                    </div>
                                )}
                            </div>

                            {fetchErr[fieldName] ? (
                                <div className={[`error-fetched`].join(' ')}>
                                    <span>{fetchErr[fieldName]}</span>
                                </div>
                            ) : (
                                <div className={[`error-fetched`].join(' ')}>
                                    <span>Error:</span>
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
