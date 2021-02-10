import { Box, FormLabel, Select } from '@chakra-ui/react';
import React from 'react';
import { FaCaretDown, FaExclamation } from 'react-icons/fa';

type OptionType = {
    value: string;
    text: string;
};

interface SelectFieldProps {
    options: OptionType[];
    label: string;
    placeholder: string;
    callback: (arg: string) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ options, label, placeholder, callback }) => {
    const isPopulated = Array.isArray(options) && options.length != 0;
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        callback(event.target.value);
    };

    return (
        <Box>
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
        </Box>
    );
};

export default SelectField;
