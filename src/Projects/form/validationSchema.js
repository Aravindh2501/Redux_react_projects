import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters long')
        .max(50, 'Name must be at most 50 characters long')
        .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
        .trim()
        .nullable(),

    email: Yup.string()
        .required('Email is required')
        .email('Invalid email format')
        .max(255, 'Email must be at most 255 characters long')
        .trim()
        .nullable(),

    age: Yup.number()
        .required('Age is required')
        .positive('Age must be a positive number')
        .integer('Age must be a whole number')
        .min(1, 'Age must be at least 1')
        .max(120, 'Age must be at most 120')
        .typeError('Age must be a number')
        .nullable(),

    date: Yup.date()
        .required('Date is required')
        .nullable(),

    // time: Yup.string()
    //     .required('Time is required')
    //     .matches(/^(0?[1-9]|1[0-2]):[0-5][0-9] ?(AM|PM)$/, 'Time must be in HH:MM AM/PM format')
    //     .nullable(),

    // time: Yup.string()
    //     .required('Time is required')
    //     .matches(/^(0[0-9]|[1-5][0-9]) min: (0[0-9]|1[0-2]) hr$/, 'Time must be in "MM min: HH hr" format')
    //     .nullable(),

    time: Yup.string()
        // .matches(/^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/, 'Time must be in "hh:mm AM/PM" format')
        .required('Time is required'),

    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .max(20, 'Password must be at most 20 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[^a-zA-Z0-9]/, 'Password must contain at least one special character')
        .nullable(),

    confirmPassword: Yup.string()
        .required('Confirm password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .nullable(),

    phone: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
        .trim()
        .nullable(),

    address: Yup.string()
        .required('Address is required')
        .max(255, 'Address must be at most 255 characters long')
        .trim()
        .nullable(),

    gender: Yup.string()
        .required('Gender is required')
        .oneOf(['male', 'female'], 'Gender must be either "male" or "female"')
        .nullable(),

    hobbies: Yup.array()
        .min(1, 'At least one hobby must be selected')
        .nullable(),

    terms: Yup.bool()
        .oneOf([true], 'You must accept the terms and conditions')
        .required('You must accept the terms and conditions'),

});

export default validationSchema;
