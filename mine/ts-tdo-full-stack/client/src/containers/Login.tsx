import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import { Form, Button, Modal } from 'react-bootstrap';
import { useFormik } from 'formik';
import { loginSchema } from '../components/form/formScheme';
import { CustomModal } from '../components';
import { AuthService } from '../services';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/Store';
import { setAuthToken, setLoginStatus } from '../redux/actions/authActions';
import { FormInput } from '../components/form/FormInput';

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

  const login = (values: LoginFormValues) => {
    const { email, password } = values;

    api
      .login(email, password)
      .then(res => {
        console.log('res.data.token', res.data.token);
        console.log('res.data.refreshToken', res.data.refreshToken);
        axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
        dispatch(setAuthToken(res.data.token));
        dispatch(setLoginStatus(true));

        history.push('/todo');
      })
      .catch(err => toggleModal(err.response.data.error.message));
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      email_2: '',
      password: '',
      password_2: '',
    },
    onSubmit: values => login(values),
    validationSchema: loginSchema,
  });

  return (
    <Modal show={true} backdrop={false} animation={false} centered>
      <Modal.Body className='py-3'>
        <Form onSubmit={formik.handleSubmit}>
          <CustomModal showModal={showModal} toggleModal={toggleModal} title={'Error in Form'} body={<p>{errorText}</p>} />

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
          {/* <FormInput
            label='email_2'
            error={formik.errors.email_2}
            type='email'
            placeholder='Confirm Email Address'
            onChange={formik.handleChange}
            value={formik.values.email_2}
            id='email_2'
          /> */}
          <FormInput
            label='password'
            error={formik.errors.password}
            type='password'
            placeholder='Password'
            onChange={formik.handleChange}
            value={formik.values.password}
            id='password'
          />
          {/* <FormInput
            label='password_2'
            error={formik.errors.password_2}
            type='password'
            placeholder='Confirm Password'
            onChange={formik.handleChange}
            value={formik.values.password_2}
            id='password_2'
          /> */}

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
