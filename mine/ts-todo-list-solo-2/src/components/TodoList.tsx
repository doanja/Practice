import React from 'react';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};
