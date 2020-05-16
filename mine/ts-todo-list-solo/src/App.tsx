import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import { TodoList } from './components/TodoList';
import { Addtodo } from './components/Addtodo';

const initialTodos: Array<TodoItems> = [
  { id: uuid(), text: 'wash car', completed: false },
  { id: uuid(), text: 'buy soap', completed: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

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
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <Addtodo addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;
