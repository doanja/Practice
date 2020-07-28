import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { CustomModal } from '../components';

// // redux
// import { useSelector } from 'react-redux';

import { AuthService } from '../services';

const Login: React.FC = () => {
  const api = new AuthService();
  const history = useHistory();

  // modal
  const [errorText, setErrorText] = useState<string>();
  const [showModal, setShowModal] = useState(false);
  const toggleModal: ToggleModal = errorText => {
    setErrorText(errorText);
    setShowModal(!showModal);
  };

  const validationSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  });

  const login = (values: LoginFormValues) => {
    const { email, password } = values;

    api
      .login(email, password)
      .then(res => {
        // TODO: store jwt
        history.push('/');
      })
      .catch(err => toggleModal(err.response.data.error.message));
  };

  return (
    <Form>
      <CustomModal showModal={showModal} toggleModal={toggleModal} title={'Error in Form'} body={<p>{errorText}</p>} />

      <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={values => login(values)}>
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
              <Form.Text className='text-danger'>{props.touched.email && props.errors.email}</Form.Text>
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
              <Form.Text className='text-danger'>{props.touched.password && props.errors.password}</Form.Text>
            </Form.Group>

            <Button variant='dark' type='submit' onClick={props.handleSubmit}>
              Login
            </Button>
          </div>
        )}
      </Formik>
    </Form>
  );
};

export default Login;
