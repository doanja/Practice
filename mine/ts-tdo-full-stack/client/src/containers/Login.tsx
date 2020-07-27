import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

// // redux
// import { useSelector } from 'react-redux';

// import API

interface FormValues {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

export const Login: React.FC = () => {
  const checkValues = (values: FormValues) => {
    const { email, confirmEmail, password, confirmPassword } = values;

    if (email !== confirmEmail) {
      // TODO: render modal
      //   alertMsg('There was a problem with your email address.', 'Emails addresses must match');
      console.log('There was a problem with your email address.', 'Emails addresses must match');
      return false;
    } else if (password !== confirmPassword) {
      // TODO: render modal
      //   alertMsg('There was a problem with your password.', 'Passwords must match.');
      console.log('There was a problem with your password.', 'Passwords must match.');
      return false;
    }

    return true;
  };

  const validationSchema = yup.object({
    email: yup.string().required().email(),
    confirmEmail: yup.string().required().email(),
    password: yup.string().required().min(8),
    confirmPassword: yup.string().required().min(8),
  });

  const login = (values: FormValues) => {
    const { email, password } = values;

    console.log('email :>> ', email);
    console.log('password :>> ', password);

    // TODO: call api call, and re-route to login page
    // API.login(email, password)
    //   .then(res => {
    //     navigation.navigate('Login');
    //   })
    //   .catch(err => alertMsg('Error', err.response.data.error.message));
  };

  return (
    <Form>
      <Formik
        initialValues={{ email: '', confirmEmail: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          if (checkValues(values)) {
            login(values);
            actions.resetForm();
          }
        }}>
        {(props: any) => (
          <div>
            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter Email'
                onChange={props.handleChange('email')}
                value={props.values.email}
                onBlur={props.handleBlur('email')}
              />
              <Form.Text className='text-danger'>{props.touched.email && props.errors.email ? 'email address is required' : null}</Form.Text>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter Password'
                onChange={props.handleChange('password')}
                value={props.values.password}
                onBlur={props.handleBlur('password')}
              />
              <Form.Text className='text-danger'>{props.touched.password && props.errors.password ? 'password is required' : null}</Form.Text>
            </Form.Group>

            <Button variant='dark' type='submit' onClick={props.handleSubmit}>
              Submit
            </Button>
          </div>
        )}
      </Formik>
    </Form>
  );
};
