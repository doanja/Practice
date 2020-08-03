import React, { useEffect, useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { TodoForm, TodoList } from '../components';
import { uuid } from 'uuidv4';
import { TodoService } from '../services';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/Store';

const TodoHome: React.FC = () => {
  const api = new TodoService();
  const history = useHistory();

  // redux
  const { loginStatus } = useSelector((state: RootStore) => state.auth);
  const dispatch = useDispatch();

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (loginStatus) history.push('/todo');
    api
      .getTodos()
      .then(res => setTodos(res.data.todos))
      .catch(err => console.log('err :>> ', err));
  }, []);

  const deleteTodo: DeleteTodo = id => setTodos(todos.filter(todo => todo._id !== id));

  const toggleTodo: ToggleTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo._id === id) {
          todo.done = !todo.done;
        }
        return todo;
      })
    );
  };

  const addTodo: AddTodo = text => {
    //setTodos([...todos, { _id: uuid(), text, done: false }])
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
