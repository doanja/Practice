import React from 'react';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo)} />
      {todo.text}
    </li>
  );
};
