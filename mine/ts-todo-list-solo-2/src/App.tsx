import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import { TodoList } from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState([
    { id: uuid(), text: 'wash the car', completed: false },
    { id: uuid(), text: 'wash the dishes', completed: false },
  ]);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo.id === selectedTodo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </React.Fragment>
  );
};

export default App;
