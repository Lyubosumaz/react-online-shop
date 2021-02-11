import { Box, FormControl, FormLabel, Select } from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';
import { FaCaretDown, FaExclamation } from 'react-icons/fa';

type OptionType = {
    value: string;
    text: string;
};

interface SelectFieldProps {
    name: string;
    options: OptionType[];
    label: string;
    placeholder: string;
    callback: (arg: string) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ options, label, placeholder, callback, ...props }) => {
    const isPopulated = Array.isArray(options) && options.length != 0;
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        callback(event.target.value);
    };
    const [field, { error }] = useField(props);

    return (
        <Box mb={8}>
            <FormControl mb={8} isInvalid={!!error}>
                <FormLabel>{label}</FormLabel>
                {isPopulated ? (
                    <Select icon={<FaCaretDown />} onChange={handleChange} placeholder={placeholder}>
                        {options.map((el, i) => (
                            <option key={i} value={el.value}>
                                {el.text}
                            </option>
                        ))}
                    </Select>
                ) : (
                    <Select icon={<FaExclamation />} placeholder={`${label}'s are empty`} isDisabled />
                )}
            </FormControl>
        </Box>
    );
};

export default SelectField;
