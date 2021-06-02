import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Todo } from './';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { getTodoList } from '../redux/actions/todoActions';
import { RootStore } from '../redux/Store';

const TodosContainer: React.FC = () => {
  // redux
  const dispatch = useDispatch();
  const { todoList } = useSelector((state: RootStore) => state.todoList);

  useEffect(() => {
    dispatch(getTodoList());
  }, [dispatch]);

  return (
    <ListGroup>
      {todoList.map((todo: Todo) => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </ListGroup>
  );
};

export default TodosContainer;
