import * as yup from "yup";

const validationSchema  = yup
.object({
  fullName: yup.string().required('Full name is required!'),
  email: yup.string().required('Email is required!').email('Not a valid email!'),
  password: yup.string().required('Password is required!').min(8, 'Password should be at least 8 characters long!'),
  confirmPassword: yup.string().required('Confirm password is required!').min(8, 'Confirm password should be at least 8 characters long!')
    .oneOf([yup.ref('password'), null], 'Confirm password should match with password!')
})
.required();

export default validationSchema;