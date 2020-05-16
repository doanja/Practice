import React, { useState } from 'react';
import { TodoList } from './components/TodoList';
import { Addtodo } from './components/Addtodo';

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

  const addTodo: AddTodo = text => {
    setTodos([...todos, { text, completed: false }]);
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <Addtodo addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;
