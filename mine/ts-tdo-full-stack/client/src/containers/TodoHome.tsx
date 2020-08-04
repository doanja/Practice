import React, { useEffect, useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { TodoForm, TodoList } from '../components';

// redux
import { useSelector } from 'react-redux';
import { RootStore } from '../redux/Store';

const TodoHome: React.FC = () => {
  const history = useHistory();

  // redux
  const { loginStatus } = useSelector((state: RootStore) => state.auth);

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (!loginStatus) history.push('/');
    else getTodos();
  }, []);

  return (
    <Fragment>
      <h1 className='text-center'>To Do List</h1>
      <TodoForm addTodo={addTodo} />

      <hr />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </Fragment>
  );
};

export default TodoHome;
