import React from 'react';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
      <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo)} />
      {todo.text}
    </li>
  );
};
