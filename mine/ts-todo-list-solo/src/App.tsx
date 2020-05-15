import React from 'react';
import { TodoList } from './components/TodoList';

interface TodoItems {
  text: string;
  completed: false;
}

// interface TodoListProps {
//   todos: Array<TodoItems>;
// }

const App: React.FC = () => {
  const todos: Array<TodoItems> = [
    { text: 'wash car', completed: false },
    { text: 'buy soap', completed: false },
  ];

  return (
    <h1>
      <TodoList todos={todos} />
    </h1>
  );
};

export default App;
