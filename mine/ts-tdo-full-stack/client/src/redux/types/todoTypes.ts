export interface TodoListState {
  readonly todoList: Todo[];
  readonly loading: boolean;
  readonly errors?: string;
}

export interface TodoList {
  todoList: Todo[];
}

export enum TodoListActionTypes {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  GET_TODO_LIST = 'GET_TODO_LIST',
  GET_TODO_LIST_SUCCESS = 'GET_TODO_LIST_SUCCESS',
  REQUEST_FAILURE = 'REQUEST_FAILURE',
}
