import React, { useState } from 'react';
import { TodoList } from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState([
    { text: 'wash the car', completed: false },
    { text: 'wash the dishes', completed: false },
  ]);

  return (
    <React.Fragment>
      <TodoList todos={todos} />
    </React.Fragment>
  );
};

export default App;
