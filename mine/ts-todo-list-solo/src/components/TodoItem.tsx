import React from 'react';

interface TodoItems {
  text: string;
  completed: false;
}

interface TodoItemProps {
  todo: TodoItems;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li>
      <input type='checkbox' checked={todo.completed} />
      {todo.text}
    </li>
  );
};
