import React, { useEffect } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/Store';
import { getTodoList } from '../redux/actions/todoActions';

const InventoryHome: React.FC = () => {
  // redux
  const { todoList, errors, loading } = useSelector((state: RootStore) => state.todoList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  return <React.Fragment></React.Fragment>;
};
export default InventoryHome;
