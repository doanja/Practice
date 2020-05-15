import React, { useState } from 'react';
import { TodoList } from './components/TodoList';

interface TodoItems {
  text: string;
  completed: false;
}

const initialTodos: Array<TodoItems> = [
  { text: 'wash car', completed: false },
  { text: 'buy soap', completed: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  return <TodoList todos={todos} />;
};

export default App;
