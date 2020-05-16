import React, { useState } from 'react';
import { TodoList } from './components/TodoList';

const initialTodos: Array<TodoItems> = [
  { text: 'wash car', completed: false },
  { text: 'buy soap', completed: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return <TodoList todos={todos} toggleTodo={toggleTodo} />;
};

export default App;
