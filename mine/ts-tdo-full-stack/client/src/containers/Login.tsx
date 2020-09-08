import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import { AuthService } from '../services';

// forms
import { Form, Button, Modal } from 'react-bootstrap';
import { useFormik } from 'formik';
import { loginSchema } from '../components/form/formScheme';
import { FormInput } from '../components/form/FormInput';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/Store';
import { setAccessToken, setLoginStatus, setRefreshToken } from '../redux/actions/authActions';
import { toggleModal } from '../redux/actions/modalActions';

const Login: React.FC = () => {
  const api = new AuthService();
  const history = useHistory();

  // redux
  const { loginStatus } = useSelector((state: RootStore) => state.auth);
  const { showModal } = useSelector((state: RootStore) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginStatus) history.push('/todo');
  }, []);

  const login = (values: LoginFormValues) => {
    const { email, password } = values;

    api
      .login(email, password)
      .then(res => {
        const accessToken = `Bearer ${res.data.accessToken}`;
        dispatch(setRefreshToken(res.data.refreshToken));
        dispatch(setAccessToken(accessToken));
        dispatch(setLoginStatus(true));

        axios.defaults.headers.common.Authorization = accessToken;
        history.push('/todo');
      })
      .catch(err => dispatch(toggleModal(!showModal, err.response.data.error.message, 'Error Logging In')));
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => login(values),
    validationSchema: loginSchema,
  });

  return (
    <Modal className='modal-form' show={true} backdrop={false} animation={false} centered>
      <Modal.Body className='py-3'>
        <Form onSubmit={formik.handleSubmit}>
          <h3 className='text-center pb-2 text-primary'>User Login</h3>

          <FormInput
            label='email'
            error={formik.errors.email}
            type='email'
            placeholder='Email Address'
            onChange={formik.handleChange}
            value={formik.values.email}
            id='email'
          />
          <FormInput
            label='password'
            error={formik.errors.password}
            type='password'
            placeholder='Password'
            onChange={formik.handleChange}
            value={formik.values.password}
            id='password'
          />

          <Button className='w-100 mb-3' variant='dark' type='submit'>
            Login
          </Button>

          <Link to='/'>Not enrolled? Sign up now.</Link>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
