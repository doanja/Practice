import {
  GET_TODO_LIST,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TodoActionTypes,
  InventoryActionTypes,
  TodoListState,
  InventoryState,
} from '../types/todoTypes';
import { ActionCreator, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { TodoService } from '../../services';
import rootReducer from '../reducers/rootReducer';
import inventory from '../inventory';

const api = new TodoService();

export const getTodoList = (todoList: Todo[]): TodoActionTypes => {
  return { type: GET_TODO_LIST, payload: todoList };
};

export type AppThunk = ActionCreator<ThunkAction<void, InventoryState, null, Action<string>>>;

export const fetchRequest: AppThunk = () => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: InventoryActionTypes.FETCH_SUCCESS,
        payload: inventory,
      });
    } catch (e) {
      return dispatch({
        type: InventoryActionTypes.FETCH_ERROR,
      });
    }
  };
};
