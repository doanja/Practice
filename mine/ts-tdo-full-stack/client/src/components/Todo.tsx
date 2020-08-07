import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// redux
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../redux/actions/todoActions';

interface TodoProps {
  todo: Todo;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  // redux
  const dispatch = useDispatch();

  return (
    <ListGroup.Item>
      <p className={todo.done ? 'todo done d-inline' : 'todo d-inline'} onClick={() => dispatch(updateTodo(todo._id, todo.done))}>
        {todo.text}
      </p>
      <span>
        <FontAwesomeIcon icon={faTimes} size='1x' className='float-right icon' onClick={() => dispatch(deleteTodo(todo._id))} />
      </span>
    </ListGroup.Item>
  );
};

export default Todo;
