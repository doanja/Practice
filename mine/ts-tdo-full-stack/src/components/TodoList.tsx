import React from 'react';
import { ListGroup } from 'react-bootstrap';

import Todo from './Todo';

interface TodoListProps {
  todos: Todo[];
  deleteTodo: DeleteTodo;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  return (
    <ListGroup>
      {todos.map(todo => (
        <Todo id={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ListGroup>
  );
};

export default TodoList;
