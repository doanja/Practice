import React, { useEffect, useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { TodoForm, TodoList } from '../components';
import { TodoService } from '../services';

// redux
import { useSelector } from 'react-redux';
import { RootStore } from '../redux/Store';

const TodoHome: React.FC = () => {
  const api = new TodoService();
  const history = useHistory();

  // redux
  const { loginStatus } = useSelector((state: RootStore) => state.auth);

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (!loginStatus) history.push('/');
    else
      api
        .getTodos()
        .then(res => setTodos(res.data.todos))
        .catch(err => console.log('err :>> ', err));
  }, []);

  const deleteTodo: DeleteTodo = id => {
    api
      .deleteTodo(id)
      .then(res => setTodos(res.data.todos))
      .catch(err => console.log('err', err));
  };

  const toggleTodo: ToggleTodo = (id, done) => {
    api
      .updateTodo(id, !done)
      .then(res => setTodos(res.data.todos))
      .catch(err => console.log('err', err));
  };

  const addTodo: AddTodo = text => {
    api
      .addTodo(text)
      .then(res => setTodos(res.data.todos))
      .catch(err => console.log('err', err));
  };

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
