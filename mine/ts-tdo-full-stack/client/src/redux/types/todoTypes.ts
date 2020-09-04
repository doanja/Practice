export interface TodoListState {
  readonly todoList: Todo[];
  readonly error?: string;
  readonly token: string;
}

export interface TodoList {
  todoList: Todo[];
}

export enum TodoListActionTypes {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  GET_TODO_LIST = 'GET_TODO_LIST',
  REQUEST_FAILED = 'REQUEST_FAILED',
}
