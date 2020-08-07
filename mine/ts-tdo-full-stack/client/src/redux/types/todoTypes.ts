export interface TodoListState {
  readonly todoList: Todo[];
  readonly loading: boolean;
  readonly errors?: string;
}

export interface TodoList {
  todoList: Todo[];
}

export enum TodoListActionTypes {
  FETCH_TODO_LIST = 'FETCH_TODO_LIST',
  FETCH_TODO_LIST_SUCCESS = 'FETCH_TODO_LIST_SUCCESS',
  FETCH_TODO_LIST_ERROR = 'FETCH_TODO_LIST_ERROR',
}

// test

export interface InventoryState {
  readonly data: Inventory[];
  readonly loading: boolean;
  readonly errors?: string;
}

export interface Inventory {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  brand?: string;
  currentInventory: number;
}

export enum InventoryActionTypes {
  FETCH_REQUEST = '@@inventory/FETCH_REQUEST',
  FETCH_SUCCESS = '@@inventory/FETCH_SUCCESS',
  FETCH_ERROR = '@@inventory/FETCH_ERROR',
}
