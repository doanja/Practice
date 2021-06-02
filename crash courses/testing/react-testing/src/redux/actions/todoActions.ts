import { TodoListActionTypes, TodoListState, TodoList } from '../types/todoTypes';
import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

export type AppThunk = ActionCreator<ThunkAction<void, TodoListState, TodoList, Action<string>>>;

export const getTodoList: AppThunk = () => {
  const todoList: Todo[] = [
    // { _id: '5d951182-8e67-4bd2-bcdf-66768e81194d', text: '1', isDone: false },
    // { _id: '6d951182-8e67-4bd2-bcdf-66768e81194e', text: '2', isDone: false },
    // { _id: '7d951182-8e67-4bd2-bcdf-66768e81194f', text: '3', isDone: false },
  ];

  return async (dispatch: Dispatch) => {
    try {
      return dispatch({
        type: TodoListActionTypes.GET_TODO_LIST,
        payload: { todoList },
      });
    } catch (error) {
      return dispatch({
        type: TodoListActionTypes.REQUEST_FAILED,
        error,
      });
    }
  };
};

export const addTodo: AppThunk = (text: string) => {
  return async (dispatch: Dispatch) => {
    try {
      return dispatch({
        type: TodoListActionTypes.ADD_TODO,
        payload: { text },
      });
    } catch (error) {
      return dispatch({
        type: TodoListActionTypes.REQUEST_FAILED,
        error,
      });
    }
  };
};

export const updateTodo: AppThunk = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      return dispatch({
        type: TodoListActionTypes.UPDATE_TODO,
        payload: { id },
      });
    } catch (error) {
      return dispatch({
        type: TodoListActionTypes.REQUEST_FAILED,
        error,
      });
    }
  };
};

export const deleteTodo: AppThunk = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      return dispatch({
        type: TodoListActionTypes.DELETE_TODO,
        payload: { id },
      });
    } catch (error) {
      return dispatch({
        type: TodoListActionTypes.REQUEST_FAILED,
        error,
      });
    }
  };
};
