import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';

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

  const addTodo: AddTodo = text => {
    setTodos([...todos, { id: uuid(), text, completed: false }]);
  };

  const deleteTodo: DeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id != id));
  };

  return (
    <React.Fragment>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </React.Fragment>
  );
};

export default App;
