import React from 'react';
import '../index.css';

interface TodoItemProps {
  todo: TodoItems;
  toggleTodo: ToggleTodo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label className={todo.completed ? 'complete' : undefined}>
        <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo)} />
        {todo.text}
      </label>
    </li>
  );
};
