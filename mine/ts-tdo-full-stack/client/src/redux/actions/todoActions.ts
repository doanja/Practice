import { TodoListActionTypes, TodoListState } from '../types/todoTypes';
import { ActionCreator, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { TodoService } from '../../services';
import { AxiosResponse } from 'axios';

const api = new TodoService();

export type AppThunk = ActionCreator<ThunkAction<void, TodoListState, null, Action<string>>>;

export const getTodoList: AppThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      const getTodos: AxiosResponse<Todo[]> = await api.getTodos();
      const todos: Todo[] = getTodos.data;

      return dispatch({
        type: TodoListActionTypes.FETCH_TODO_LIST_SUCCESS,
        payload: todos,
      });
    } catch (e) {
      return dispatch({
        type: TodoListActionTypes.FETCH_TODO_LIST_ERROR,
      });
    }
  };
};
