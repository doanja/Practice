import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { AuthService } from '../services';

// forms
import { Form, Button, Modal } from 'react-bootstrap';
import { useFormik } from 'formik';
import { signupSchema } from '../components/form/formScheme';
import { FormInput } from '../components/form/FormInput';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/Store';
import { toggleModal } from '../redux/actions/modalActions';

const Signup: React.FC = () => {
  // redux
  const { loginStatus } = useSelector((state: RootStore) => state.auth);
  const { showModal } = useSelector((state: RootStore) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginStatus) history.push('/todo');
  }, []);

  const api = new AuthService();
  const history = useHistory();

  const signup = (values: SignupFormValues) => {
    const { email, password } = values;

    api
      .signup(email, password)
      .then(res => history.push('/login'))
      .catch(err => dispatch(toggleModal(!showModal, err.response.data.error.message, 'Error Signing Up')));
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      email_2: '',
      password: '',
      password_2: '',
    },
    onSubmit: values => signup(values),
    validationSchema: signupSchema,
  });

  return (
    <Modal className='modal-form' show={true} backdrop={false} animation={false} centered>
      <Modal.Body className='py-3'>
        <Form onSubmit={formik.handleSubmit}>
          <h3 className='text-center pb-2 text-primary'>User Signup</h3>
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
            label='email_2'
            error={formik.errors.email_2}
            type='email'
            placeholder='Confirm Email Address'
            onChange={formik.handleChange}
            value={formik.values.email_2}
            id='email_2'
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
          <FormInput
            label='password_2'
            error={formik.errors.password_2}
            type='password'
            placeholder='Confirm Password'
            onChange={formik.handleChange}
            value={formik.values.password_2}
            id='password_2'
          />

          <Button className='w-100 mb-3' variant='dark' type='submit'>
            Signup
          </Button>

          <Link to='/login'>Already a user? Login here.</Link>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Signup;
