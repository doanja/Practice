import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string().required('Required').email('Invalid email'),
  password: Yup.string().required('Required').min(8, 'have at least 8 chars'),
});

export const signupSchema = Yup.object({
  email: Yup.string().required('Required').email('Invalid email'),
  email_2: Yup.string().when('email', {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf([Yup.ref('email')], 'Email does not match'),
  }),
  password: Yup.string().required('Required').min(8, 'have at least 8 chars'),
  password_2: Yup.string().when('password', {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf([Yup.ref('password')], 'Password does not match'),
  }),
});
