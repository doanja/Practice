import React, { useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { TodoForm, TodoList } from '../components';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/Store';
import { getTodoList } from '../redux/actions/todoActions';

import { Container } from 'react-bootstrap';

const TodoHome: React.FC = () => {
  const history = useHistory();

  // redux
  const { loginStatus } = useSelector((state: RootStore) => state.auth);
  const { todoList } = useSelector((state: RootStore) => state.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loginStatus) history.push('/');
    else dispatch(getTodoList());
  }, []);

  return (
    <Container>
      <h1 className='text-center mt-5'>To Do List</h1>
      <TodoForm />

      <hr />
      <TodoList todos={todoList} />
    </Container>
  );
};

export default TodoHome;
