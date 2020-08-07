import { TodoListActionTypes, TodoListState, TodoList } from '../types/todoTypes';
import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
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
        type: TodoListActionTypes.GET_TODO_LIST_SUCCESS,
        payload: todos,
      });
    } catch (e) {
      return dispatch({
        type: TodoListActionTypes.REQUEST_FAILURE,
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
    } catch (e) {
      return dispatch({
        type: TodoListActionTypes.REQUEST_FAILURE,
        // payload: null,
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
    } catch (e) {
      return dispatch({
        type: TodoListActionTypes.REQUEST_FAILURE,
        // payload: null,
      });
    }
  };
};

export const deleteTodo: ActionCreator<ThunkAction<void, TodoListState, TodoList, Action<string>>> = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const deleteTodos: AxiosResponse<Todo[]> = await api.deleteTodo(id);
      const todos: Todo[] = deleteTodos.data;

      return dispatch({
        type: TodoListActionTypes.DELETE_TODO,
        payload: todos,
      });
    } catch (e) {
      return dispatch({
        type: TodoListActionTypes.REQUEST_FAILURE,
        // payload: null,
      });
    }
  };
};

// export const addToCart: ActionCreator<ThunkAction<void, ApplicationState, Inventory, Action<string>>> = item => {
//   return (dispatch: Dispatch): Action => {
//     try {
//       return dispatch({
//         type: CartActionTypes.ADD_TO_CART,
//         payload: item,
//       });
//     } catch (e) {
//       return dispatch({
//         type: CartActionTypes.ADD_TO_CART_FAILURE,
//         payload: null,
//       });
//     }
//   };
// };
