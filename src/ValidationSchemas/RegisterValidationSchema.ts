import * as yup from 'yup';

const RegisterValidationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string()
        .min(8)
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/\W/, 'Password requires a symbol')
        .required(),
    repeatPassword: yup.string()
        .oneOf([yup.ref('password'), ''], 'Passwords must match')
        .required('Repeat password is required')
})

export default RegisterValidationSchema;