import React, { useEffect } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/Store';
import { fetchRequest } from '../redux/actions/todoActions';

const InventoryHome: React.FC = () => {
  // redux
  const { data, errors, loading } = useSelector((state: RootStore) => state.inventory);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequest());
  }, []);

  return <React.Fragment></React.Fragment>;
};
export default InventoryHome;
