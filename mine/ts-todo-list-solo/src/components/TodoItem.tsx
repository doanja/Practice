import React from 'react';
import '../index.css';

interface TodoItemProps {
  todo: TodoItems;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <button onClick={() => deleteTodo(todo.id)}>delete</button>
      <label className={todo.completed ? 'complete' : undefined}>
        <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo)} />
        {todo.text}
      </label>{' '}
    </li>
  );
};
