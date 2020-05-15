import React from 'react';

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
      {todos.map(todo => {
        <li key={todo.text}>
          {todo.text}
          <input type='checkbox' checked={todo.completed} />
        </li>;
      })}
    </ul>
  );
};
