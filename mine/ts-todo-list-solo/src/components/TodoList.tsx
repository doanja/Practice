import React from 'react';
import { TodoItem } from './TodoItem';

interface TodoItems {
  text: string;
  completed: false;
}

interface TodoListProps {
  todos: Array<TodoItems>;
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.text} todo={todo} />
      ))}
    </ul>
  );
};
