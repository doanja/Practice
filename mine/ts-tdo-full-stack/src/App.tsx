import React, { useState } from 'react';
import TodoList from './components/TodoList';

import { Container } from 'react-bootstrap';
import './App.css';

const App: React.FC = ({}) => {
  const [todos, setTodos] = useState([
    { id: '0', text: 'wash car', done: false },
    { id: '1', text: 'wash clothes', done: false },
  ]);

  const deleteTodo: DeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Container>
      <h1 className='text-center'>To Do List</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </Container>
  );
};

export default App;
