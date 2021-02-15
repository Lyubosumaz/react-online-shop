import * as Yup from 'yup';

export const createValidations = Yup.object().shape({
    category: Yup.string().required('is required'),
    title: Yup.string().max(15, 'must be 15 characters or less').required('is required'),
    description: Yup.string().max(255, 'must be 255 characters or less').required('is required'),
    price: Yup.number().typeError('needs a correct number').min(0.05, 'must be $0.05 or greater').required('is required'),
});

export const registerValidations = Yup.object().shape({
    email: Yup.string(),
    username: Yup.string().required('is required'),
    password: Yup.string().required('is required'),
});

export const loginValidations = Yup.object().shape({
    usernameOrEmail: Yup.string().required('is required'),
    password: Yup.string().required('is required'),
});

export const forgottenPasswordValidations = Yup.object().shape({
    email: Yup.string().required('is required'),
});

export const changeEmailValidations = Yup.object().shape({
    oldEmail: Yup.string().required('is required'),
    newEmail: Yup.string().required('is required'),
    password: Yup.string().required('is required'),
});

export const changePasswordValidations = Yup.object().shape({
    newPassword: Yup.string().required('is required'),
});

export const deleteAccountValidations = Yup.object().shape({
    email: Yup.string().required('is required'),
    password: Yup.string().required('is required'),
});
