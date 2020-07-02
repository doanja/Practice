import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface TodoProps {
  id: string;
  todo: Todo;
  deleteTodo: DeleteTodo;
}

const Todo: React.FC<TodoProps> = ({ todo, deleteTodo }) => {
  return (
    <ListGroup.Item>
      {todo.text}{' '}
      <span>
        {' '}
        <FontAwesomeIcon icon={faTimes} size='1x' className='float-right' onClick={() => deleteTodo(todo.id)} />
      </span>
    </ListGroup.Item>
  );
};

export default Todo;
