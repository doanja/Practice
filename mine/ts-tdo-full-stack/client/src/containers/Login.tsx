import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { CustomModal } from '../components';
import { AuthService } from '../services';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/Store';
import { setAuthToken, setLoginStatus } from '../redux/actions/authActions';

import { Container } from 'react-bootstrap';

const Login: React.FC = () => {
  const api = new AuthService();
  const history = useHistory();

  // redux
  const { loginStatus } = useSelector((state: RootStore) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginStatus) history.push('/todo');
  }, []);

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
        axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
        dispatch(setAuthToken(res.data.token));
        dispatch(setLoginStatus(true));
        history.push('/todo');
      })
      .catch(err => toggleModal(err.response.data.error.message));
  };

  return (
    <Container className='p-5 test'>
      <Form>
        <CustomModal showModal={showModal} toggleModal={toggleModal} title={'Error in Form'} body={<p>{errorText}</p>} />

        <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={values => login(values)}>
          {(props: any) => (
            <div>
              <Form.Group controlId='email'>
                <Form.Control
                  type='email'
                  placeholder='Email Address'
                  onChange={props.handleChange('email')}
                  value={props.values.email}
                  onBlur={props.handleBlur('email')}
                />
                <Form.Text className='text-danger'>{props.touched.email && props.errors.email}</Form.Text>
              </Form.Group>

              <Form.Group controlId='password'>
                <Form.Control
                  type='password'
                  placeholder='Password'
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
    </Container>
  );
};

export default Login;
