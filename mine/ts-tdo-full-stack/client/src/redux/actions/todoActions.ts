import { TodoListActionTypes, TodoListState, TodoList } from '../types/todoTypes';
import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { TodoService } from '../../services';
import { AxiosResponse } from 'axios';

const api = new TodoService();

export type AppThunk = ActionCreator<ThunkAction<void, TodoListState, null, Action<string>>>;

export const getTodoList: AppThunk = () => {
  return async (dispatch: Dispatch) => {
    const getTodos: AxiosResponse<Todo[]> = await api.getTodos();
    try {
      const todos: Todo[] = getTodos.data;

      return dispatch({
        type: TodoListActionTypes.GET_TODO_LIST,
        payload: todos,
      });
    } catch (error) {
      return dispatch({
        type: TodoListActionTypes.REQUEST_FAILED,
        error: getTodos.data,
      });
    }
  };
};

export const addTodo: ActionCreator<ThunkAction<void, TodoListState, TodoList, Action<string>>> = (text: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const addTodos: AxiosResponse<Todo[]> = await api.addTodo(text);
      const todos: Todo[] = addTodos.data;

      return dispatch({
        type: TodoListActionTypes.ADD_TODO,
        payload: todos,
      });
    } catch (error) {
      return dispatch({
        type: TodoListActionTypes.REQUEST_FAILED,
        error,
      });
    }
  };
};

export const updateTodo: ActionCreator<ThunkAction<void, TodoListState, TodoList, Action<string>>> = (id: string, done: boolean) => {
  return async (dispatch: Dispatch) => {
    try {
      const updateTodos: AxiosResponse<Todo[]> = await api.updateTodo(id, !done);
      const todos: Todo[] = updateTodos.data;

      return dispatch({
        type: TodoListActionTypes.UPDATE_TODO,
        payload: todos,
      });
    } catch (error) {
      return dispatch({
        type: TodoListActionTypes.REQUEST_FAILED,
        error,
      });
    }
  };
};

export const deleteTodo: ActionCreator<ThunkAction<void, TodoListState, TodoList, Action<string>>> = (id: string) => {
  return async (dispatch: Dispatch) => {
    const deleteTodos: AxiosResponse<Todo[]> = await api.deleteTodo(id);
    console.log('deleteTodos', deleteTodos);
    try {
      const todos: Todo[] = deleteTodos.data;

      return dispatch({
        type: TodoListActionTypes.DELETE_TODO,
        payload: todos,
      });
    } catch (error) {
      const errors: any = deleteTodos;
      console.log('errors', errors);
      console.log('error', error);
      return dispatch({
        type: TodoListActionTypes.REQUEST_FAILED,
        error: 'hello world',
      });
    }
  };
};
