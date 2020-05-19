import React from 'react';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Array<Todo>;
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
};
