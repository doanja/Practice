import React, { useState, useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { TodoForm, TodoList, CustomModal } from '../components';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/Store';
import { getTodoList } from '../redux/actions/todoActions';

import { Container, Button } from 'react-bootstrap';
import { NavigationBar } from '../components/NavigationBar';

import axios from 'axios';

import { clearAuthToken, clearLoginStatus } from '../redux/actions/authActions';

const TodoHome: React.FC = () => {
  const history = useHistory();

  // redux
  const { loginStatus, authToken } = useSelector((state: RootStore) => state.auth);
  const { todoList, error } = useSelector((state: RootStore) => state.todoList);
  const dispatch = useDispatch();

  // modal
  const [errorText, setErrorText] = useState<string>();
  const [showModal, setShowModal] = useState(false);
  const toggleModal: ToggleModal = errorText => {
    setErrorText(errorText);
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (!loginStatus) history.push('/');

    dispatch(getTodoList());
  }, [todoList]);

  useEffect(() => {
    if (error === 'Request failed with status code 401') {
      // logout
      toggleModal(`Your session has expired. Please login again.`);
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
      <CustomModal
        showModal={showModal}
        toggleModal={toggleModal}
        title={'Session Error'}
        body={<p>{errorText}</p>}
        confirmFunction={() => logout()}
      />
      ;
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
