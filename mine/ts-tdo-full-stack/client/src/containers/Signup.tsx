import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form, Button, Modal } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { CustomModal } from '../components';
import { AuthService } from '../services';

// redux
import { useSelector } from 'react-redux';
import { RootStore } from '../redux/Store';

const Signup: React.FC = () => {
  // redux
  const { loginStatus } = useSelector((state: RootStore) => state.auth);

  useEffect(() => {
    if (loginStatus) history.push('/todo');
  }, []);

  const api = new AuthService();
  const history = useHistory();

  // modal
  const [errorText, setErrorText] = useState<string>();
  const [showModal, setShowModal] = useState(false);
  const toggleModal: ToggleModal = errorText => {
    setErrorText(errorText);
    setShowModal(!showModal);
  };

  const checkValues = (values: SignupFormValues) => {
    const { email, confirmEmail, password, confirmPassword } = values;

    if (email !== confirmEmail) {
      toggleModal('Emails addresses must match');
      return false;
    } else if (password !== confirmPassword) {
      toggleModal('Passwords must match');
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

  const signup = (values: SignupFormValues) => {
    const { email, password } = values;

    api
      .signup(email, password)
      .then(res => history.push('/login'))
      .catch(err => toggleModal(err.response.data.error.message));
  };

  return (
    <Modal show={true} className='text-center' centered>
      <Modal.Body className='py-3'>
        <Form>
          <CustomModal showModal={showModal} toggleModal={toggleModal} title={'Error in Form'} body={<p>{errorText}</p>} />

          <h3 className='text-center pb-2 text-primary'>User Signup</h3>

          <Formik
            initialValues={{ email: '', confirmEmail: '', password: '', confirmPassword: '' }}
            validationSchema={validationSchema}
            onSubmit={values => {
              if (checkValues(values)) signup(values);
            }}>
            {(props: any) => (
              <div>
                <Form.Group controlId='email'>
                  <Form.Control
                    type='email'
                    placeholder='Enter Email Address'
                    onChange={props.handleChange('email')}
                    value={props.values.email}
                    onBlur={props.handleBlur('email')}
                  />
                  <Form.Text className='text-danger'>{props.touched.email && props.errors.email}</Form.Text>
                </Form.Group>

                <Form.Group controlId='confirmEmail'>
                  <Form.Control
                    type='email'
                    placeholder='Confirm Email'
                    onChange={props.handleChange('confirmEmail')}
                    value={props.values.confirmEmail}
                    onBlur={props.handleBlur('confirmEmail')}
                  />
                  <Form.Text className='text-danger'>{props.touched.confirmEmail && props.errors.confirmEmail}</Form.Text>
                </Form.Group>

                <Form.Group controlId='password'>
                  <Form.Control
                    type='password'
                    placeholder='Enter Password'
                    onChange={props.handleChange('password')}
                    value={props.values.password}
                    onBlur={props.handleBlur('password')}
                  />
                  <Form.Text className='text-danger'>{props.touched.password && props.errors.password}</Form.Text>
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                  <Form.Control
                    type='password'
                    placeholder='Confirm Password'
                    onChange={props.handleChange('confirmPassword')}
                    value={props.values.confirmPassword}
                    onBlur={props.handleBlur('confirmPassword')}
                  />
                  <Form.Text className='text-danger'>{props.touched.confirmPassword && props.errors.confirmPassword}</Form.Text>
                </Form.Group>

                <Button className='w-100 mb-3' variant='dark' type='submit' onClick={props.handleSubmit}>
                  Signup
                </Button>

                <Link className='text-center' to='/login'>
                  Already a user? Login here.
                </Link>
              </div>
            )}
          </Formik>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Signup;
