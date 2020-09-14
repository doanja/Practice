import React, { useState, useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthService } from '../services';
import { TodoForm, TodoList, NavigationBar, CustomModal } from '../components';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/Store';
import { getTodoList } from '../redux/actions/todoActions';
import { clearAccessToken, clearLoginStatus, clearRefreshToken, setAccessToken } from '../redux/actions/authActions';
import { checkTokenExp } from '../helper';

const TodoHome: React.FC = () => {
  const api = new AuthService();
  const history = useHistory();

  // redux
  const { loginStatus, refreshToken } = useSelector((state: RootStore) => state.auth);
  const { todoList, error, token } = useSelector((state: RootStore) => state.todoList);
  const dispatch = useDispatch();

  // modal
  const [errorText, setErrorText] = useState<string>();
  const [showModal, setShowModal] = useState(false);
  const toggleModal: ToggleModal = errorText => {
    setErrorText(errorText);
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (error === 'TokenExpiredError') requestAccessToken();
  }, [error]);

  useEffect(() => {
    if (!loginStatus) history.push('/');

    dispatch(getTodoList());
  }, []);

  useEffect(() => {
    if (token) {
      const accessToken = `Bearer ${token}`;
      dispatch(setAccessToken(accessToken));
      axios.defaults.headers.common.Authorization = accessToken;
    }
  }, [token]);

  const logout = () => {
    dispatch(clearAccessToken());
    dispatch(clearRefreshToken());
    dispatch(clearLoginStatus());
    window.localStorage.removeItem('store');
    history.push('/login');
  };

  const requestAccessToken = () => {
    // check refresh token expiry
    const token = axios.defaults.headers.common.Authorization.split(' ')[1];

    if (!checkTokenExp(token)) {
      toggleModal('Your session has expired. Please login again.');
    } else {
      api
        .getAccessToken(refreshToken)
        .then(res => {
          console.log('refreshToken :>> ', refreshToken);
          const accessToken = `Bearer ${res.data.accessToken}`;
          dispatch(setAccessToken(accessToken));
          axios.defaults.headers.common.Authorization = accessToken;
          dispatch(getTodoList());
        })
        .catch(err => toggleModal('Your session has expired. Please login again.'));
    }
  };

  return (
    <Fragment>
      <NavigationBar />

      <CustomModal showModal={showModal} toggleModal={logout} title={'Session Error'} body={<p>{errorText}</p>} />

      <Container className='todo-home mt-5 p-3'>
        <h1 className='text-center text-light'>To Do List</h1>
        <TodoForm />

        <hr />
        <TodoList todos={todoList} />

        <Button
          className='mt-3'
          variant='light'
          onClick={() => {
            console.log('debug');
            const accessToken =
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjI4OGU5NmRmMGQxMjU3ZTQxMjU2MjgiLCJpYXQiOjE1OTk1OTI0MTIsImV4cCI6MTU5OTU5MjQyN30.DPrVP53EHnucccaE-CFvfUcgX1pVrcXgcWFi8VenfCg';
            setAccessToken(accessToken);
            axios.defaults.headers.common.Authorization = accessToken;
          }}>
          Debug
        </Button>
      </Container>
    </Fragment>
  );
};

export default TodoHome;
