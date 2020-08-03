import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface TodoProps {
  todo: Todo;
  deleteTodo: DeleteTodo;
  toggleTodo: ToggleTodo;
}

const Todo: React.FC<TodoProps> = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <ListGroup.Item>
      <p className={todo.done ? 'todo done d-inline' : 'todo d-inline'} onClick={() => toggleTodo(todo._id)}>
        {todo.text}
      </p>
      <span>
        <FontAwesomeIcon icon={faTimes} size='1x' className='float-right icon' onClick={() => deleteTodo(todo._id)} />
      </span>
    </ListGroup.Item>
  );
};

export default Todo;
