"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegister = void 0;
const validateRegister = (options) => {
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
exports.validateRegister = validateRegister;
//# sourceMappingURL=validateRegister.js.map