import React, { useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { TodoForm, TodoList } from '../components';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/Store';
import { getTodoList } from '../redux/actions/todoActions';

import { Container, Button } from 'react-bootstrap';
import { NavigationBar } from '../components/NavigationBar';

import axios from 'axios';

const TodoHome: React.FC = () => {
  const history = useHistory();

  // redux
  const { loginStatus, authToken } = useSelector((state: RootStore) => state.auth);
  const { todoList } = useSelector((state: RootStore) => state.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loginStatus) history.push('/');
    else dispatch(getTodoList());
  }, []);

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
            console.log('authToken', authToken);
          }}>
          delete jwt
        </Button>
      </Container>
    </Fragment>
  );
};

export default TodoHome;
