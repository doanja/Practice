import React from 'react';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Array<TodoItems>;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};
