import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import React from 'react';

type SelectFieldProps = {
    callback: (arg: string) => void;
};

const SelectField: React.FC<SelectFieldProps> = ({ callback }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        callback(event.target.value);
    };

    return (
        <FormControl isInvalid={!!false}>
            <FormLabel htmlFor="category">Category</FormLabel>
            <Select onChange={handleChange} name="category" placeholder="Select category">
                <option value="all">All</option>
            </Select>
        </FormControl>
    );
};

export default SelectField;
