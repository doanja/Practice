import React from 'react';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Array<TodoItems>;
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};
