import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';
import { FaCaretDown, FaExclamation } from 'react-icons/fa';
import ErrorField from '../ErrorField';

type OptionsType = {
    value: string;
    text: string;
};

type SelectFieldProps = InputHTMLAttributes<HTMLSelectElement> & {
    placeholder: string;
    label: string;
    options: OptionsType[];
};

const SelectField: React.FC<any> = ({ placeholder, label, options, ...props }) => {
    const isPopulated = Array.isArray(options) && options.length != 0;
    const [field, { touched, error }] = useField(props);

    return (
        <FormControl mb={8} isInvalid={!!touched && !!error}>
            <FormLabel htmlFor={field.name}>{label}</FormLabel>
            {isPopulated ? (
                <Select id={field.name} icon={<FaCaretDown />} {...field} {...props} placeholder={placeholder}>
                    {options.map((el: any, i: any) => (
                        <option key={i} value={el.value}>
                            {el.text}
                        </option>
                    ))}
                </Select>
            ) : (
                <Select icon={<FaExclamation />} placeholder={`${label}'s are empty`} isDisabled />
            )}
            <ErrorField label={label} touched={touched} error={error} />
        </FormControl>
    );
};

export default SelectField;
