import React from 'react';
import { ListGroup } from 'react-bootstrap';

import Todo from './Todo';

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ListGroup>
      {todos.map(todo => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </ListGroup>
  );
};

export default TodoList;
