import { UsernamePasswordInput } from 'src/resolvers/UsernamePasswordInput';

export const validateRegister = (options: UsernamePasswordInput) => {
    if (options.username.length <= 2) {
        return [
            {
                field: `username`,
                message: `length must be greater then 2`,
            },
        ];
    }

    if (options.username.includes('@')) {
        return [
            {
                field: `username`,
                message: `cannot include an @ sign`,
            },
        ];
    }

    if (!options.email.includes('@')) {
        return [
            {
                field: `username`,
                message: `length must be greater then 2`,
            },
        ];
    }

    if (options.password.length <= 2) {
        return [
            {
                field: `password`,
                message: `length must be greater then 2`,
            },
        ];
    }

    return null;
};
