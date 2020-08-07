import { InventoryState, InventoryActionTypes } from '../types/todoTypes';
import { Reducer } from 'redux';

export const initialState: InventoryState = {
  data: [],
  loading: false,
  errors: undefined,
};

const reducer: Reducer<InventoryState> = (state = initialState, action) => {
  switch (action.type) {
    case InventoryActionTypes.FETCH_REQUEST:
      return { ...state, loading: true };

    case InventoryActionTypes.FETCH_SUCCESS: {
      console.log('action payload', action.payload);
      return { ...state, loading: false, data: action.payload };
    }

    case InventoryActionTypes.FETCH_ERROR:
      return { ...state, loading: false, errors: action.payload };

    default:
      return state;
  }
};

export { reducer as InventoryReducer };
