import * as Yup from 'yup';

export const createValidations = Yup.object().shape({
    category: Yup.string().required('is required'),
    title: Yup.string().max(15, 'must be 15 characters or less').required('is required'),
    description: Yup.string().max(255, 'must be 255 characters or less').required('is required'),
    price: Yup.number().typeError('needs a correct number').min(0.05, 'must be $0.05 or greater').required('is required'),
});
