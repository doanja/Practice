import React, { useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { TodoForm, TodoList, NavigationBar } from '../components';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/Store';
import { getTodoList } from '../redux/actions/todoActions';
import { clearAuthToken, clearLoginStatus } from '../redux/actions/authActions';
import { toggleModal } from '../redux/actions/modalActions';

const TodoHome: React.FC = () => {
  const history = useHistory();

  // redux
  const { loginStatus, authToken } = useSelector((state: RootStore) => state.auth);
  const { todoList, error } = useSelector((state: RootStore) => state.todoList);
  const { showModal } = useSelector((state: RootStore) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loginStatus) history.push('/');

    dispatch(getTodoList());
  }, [todoList]);

  useEffect(() => {
    if (error === 'Request failed with status code 401') {
      // logout
      dispatch(toggleModal(!showModal, `Your session has expired. Please login again.`, 'Error'));
    }
  }, [error]);

  const logout = () => {
    dispatch(clearAuthToken());
    dispatch(clearLoginStatus());
    window.localStorage.removeItem('store');
    history.push('/');
  };

  return (
    <Fragment>
      <NavigationBar />

      <Container className='todo-home mt-5 p-3'>
        <h1 className='text-center text-light'>To Do List</h1>
        <TodoForm />

        <hr />
        <TodoList todos={todoList} />

        <Button
          className='mt-3'
          variant='primary'
          onClick={() => {
            // axios.defaults.headers.common.Authorization = '';
            console.log('axios.defaults.headers.common.Authorization', axios.defaults.headers.common.Authorization);
            // console.log('authToken', authToken);
          }}>
          delete jwt
        </Button>
      </Container>
    </Fragment>
  );
};

export default TodoHome;
