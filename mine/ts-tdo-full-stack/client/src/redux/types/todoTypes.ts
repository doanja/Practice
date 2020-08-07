export interface TodoListState {
  readonly todoList: Todo[];
  readonly loading: boolean;
  readonly errors?: string;
}

export interface TodoList {
  todoList: Todo[];
}

export enum TodoListActionTypes {
  ADD_TO_TODO_LIST = 'ADD_TO_TODO_LIST',
  REMOVE_FROM_TODO_LIST = ' REMOVE_FROM_TODO_LIST',
  UPDATE_TODO_LIST = 'UPDATE_TODO_LIST',
  FETCH_TODO_LIST = 'FETCH_TODO_LIST',
  FETCH_TODO_LIST_SUCCESS = 'FETCH_TODO_LIST_SUCCESS',
  FETCH_TODO_LIST_ERROR = 'FETCH_TODO_LIST_ERROR',
}
