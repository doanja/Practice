import React from 'react';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li>
      <input type='checkbox' />
      {todo.text}
    </li>
  );
};
