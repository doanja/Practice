import React from 'react';
import { ListGroup } from 'react-bootstrap';

import Todo from './Todo';

interface TodoListProps {
  todos: Todo[];
  deleteTodo: DeleteTodo;
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ListGroup>
      {todos.map(todo => (
        <Todo key={todo._id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
    </ListGroup>
  );
};

export default TodoList;
