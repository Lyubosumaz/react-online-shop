import React from 'react';
import { Field } from 'react-final-form';

interface FieldFactoryProps {
    fieldName: string;
    fieldLabel?: string;
    fieldType?: string;
    fieldPlaceholder?: string;
}

const FieldFactory: React.FC<FieldFactoryProps> = ({ fieldName, fieldLabel, fieldType, fieldPlaceholder }) => {
    const required = (value: any) => (value ? undefined : 'Required');
    const realLabel = fieldLabel ? fieldLabel : '';
    const realType = fieldType ? fieldType : 'text';
    const realPlaceholder = fieldPlaceholder ? fieldPlaceholder : '';

    return (
        <>
            <Field name={fieldName} validate={required}>
                {({ input, meta }) => (
                    <div>
                        <label>{realLabel}</label>
                        <input {...input} type={realType} placeholder={realPlaceholder} />
                        {/* {meta.error && meta.touched && <span>{meta.error}</span>} */}
                        {/* {errors['username7'] ? <div>{errors['username7']}</div> : <div>123</div>} */}
                        {/* {meta.validating && <div className={stylesSpinner.div}></div>} */}
                    </div>
                )}
            </Field>
        </>
    );
};

export default FieldFactory;
