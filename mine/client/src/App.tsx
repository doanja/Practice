import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { uuid } from 'uuidv4';

import { Container } from 'react-bootstrap';
import './styles/App.css';

const App: React.FC = ({}) => {
  const [todos, setTodos] = useState([
    { id: uuid(), text: 'wash car', done: false },
    { id: uuid(), text: 'wash clothes', done: false },
    { id: uuid(), text: 'wash wash dishes', done: false },
  ]);

  const deleteTodo: DeleteTodo = id => setTodos(todos.filter(todo => todo.id !== id));

  const toggleTodo: ToggleTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      })
    );
  };

  const addTodo: AddTodo = text => setTodos([...todos, { id: uuid(), text, done: false }]);

  return (
    <Container>
      <h1 className='text-center'>To Do List</h1>
      <TodoForm addTodo={addTodo} />

      <hr />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </Container>
  );
};

export default App;
