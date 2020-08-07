import React, { useEffect, useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { TodoForm, TodoList } from '../components';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/Store';
import { getTodoList } from '../redux/actions/todoActions';

const TodoHome: React.FC = () => {
  const history = useHistory();

  // redux
  const { loginStatus } = useSelector((state: RootStore) => state.auth);
  const { todoList, errors, loading } = useSelector((state: RootStore) => state.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loginStatus) history.push('/');
    else dispatch(getTodoList());
  }, []);

  return (
    <Fragment>
      <h1 className='text-center'>To Do List</h1>
      <TodoForm />

      <hr />
      <TodoList todos={todoList} />
    </Fragment>
  );
};

export default TodoHome;
