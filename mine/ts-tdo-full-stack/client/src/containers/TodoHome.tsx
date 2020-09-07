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
    if (error === 'TokenExpiredError') {
      // TODO: need to make api request to get a new access token
      requestAccessToken();
    }
  }, [error]);

  useEffect(() => {
    if (!loginStatus) history.push('/');

    dispatch(getTodoList());
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(setAccessToken(token));
      axios.defaults.headers.common.Authorization = token;
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
    console.log('requesting new Access Token');
    api
      .getAccessToken(refreshToken)
      .then(res => {
        console.log('res.data.accesstoken', res.data.accessToken);
        dispatch(setAccessToken(res.data.accessToken));
        axios.defaults.headers.common.Authorization = `Bearer ${res.data.accessToken}`;
      })
      .catch(err => {
        console.log('error trying to request a new access token, refresh token probably expired');
        toggleModal('Your session has expired. Please login again.');
      });
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

        {/* <Button
          className='mt-3'
          variant='primary'
          onClick={() => {
            // console.log('AXIOS HEADER:', axios.defaults.headers.common.Authorization);
            console.log('token set');
            let token =
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjI4OGU5NmRmMGQxMjU3ZTQxMjU2MjgiLCJpYXQiOjE1OTkxNjU1NzQsImV4cCI6MTU5OTE2NjQ3NH0.I_5mah49a78hX4cHG_9rt0VvG4G2iVj81AvtLoFGIbY';
            dispatch(setAccessToken(token));
            axios.defaults.headers.common.Authorization = token;
          }}>
          Console Log Auth Header
        </Button> */}
      </Container>
    </Fragment>
  );
};

export default TodoHome;
