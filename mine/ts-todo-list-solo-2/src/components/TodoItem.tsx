import React from 'react';
import '../index.css';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
      <label className={todo.completed ? 'todo' : undefined}>
        <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo)} />
        {todo.text}
      </label>
    </li>
  );
};
