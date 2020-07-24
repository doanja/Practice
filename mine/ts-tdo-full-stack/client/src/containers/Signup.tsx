import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

// // redux
// import { useSelector } from 'react-redux';

import useInput from '../hooks/useInput';
// import API
//

interface FormValues {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

export const Signup: React.FC = ({}) => {
  const checkValues = (values: FormValues) => {
    const { email, confirmEmail, password, confirmPassword } = values;

    if (email !== confirmEmail) {
      //   alertMsg('There was a problem with your email address.', 'Emails addresses must match');
      console.log('There was a problem with your email address.', 'Emails addresses must match');
      return false;
    } else if (password !== confirmPassword) {
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

  const signup = () => {
    console.log('signup!!');
  };

  return (
    <Form>
      <Formik
        initialValues={{ email: '', confirmEmail: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          if (checkValues(values)) {
            signup();
            actions.resetForm();
          }
        }}>
        {(props: any) => (
          <div>
            <Form.Group controlId='email'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                onChange={props.handleChange('email')}
                value={props.values.email}
                onBlur={props.handleBlur('email')}
              />
              <Form.Text className='text-danger'>{props.touched.email && props.errors.email ? 'email address is required' : null}</Form.Text>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Confirm Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Confirm email'
                onChange={props.handleChange('confirmEmail')}
                value={props.values.confirmEmail}
                onBlur={props.handleBlur('confirmEmail')}
              />
              <Form.Text className='text-danger'>
                {props.touched.confirmEmail && props.errors.confirmEmail ? 'email address is required' : null}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                onChange={props.handleChange('password')}
                value={props.values.password}
                onBlur={props.handleBlur('password')}
              />
              <Form.Text className='text-danger'>{props.touched.password && props.errors.password ? 'password is required' : null}</Form.Text>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm Password'
                onChange={props.handleChange('confirmPassword')}
                value={props.values.confirmPassword}
                onBlur={props.handleBlur('confirmPassword')}
              />
              <Form.Text className='text-danger'>
                {props.touched.confirmPassword && props.errors.confirmPassword ? 'password is required' : null}
              </Form.Text>
            </Form.Group>

            <Button variant='dark' type='submit' onClick={() => console.log('submit')}>
              Submit
            </Button>
          </div>
        )}
      </Formik>
    </Form>
  );
};
