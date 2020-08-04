export const SET_TODO_LIST = 'SET_TODO_LIST';
export const GET_TODO_LIST = 'GET_TODO_LIST';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export interface TodoState {
  todoList: Todo[];
}

interface GetTodoList {
  type: typeof GET_TODO_LIST;
  payload: Todo[];
}

interface AddTodo {
  type: typeof ADD_TODO;
  payload: Todo[];
}

interface UpdateTodo {
  type: typeof UPDATE_TODO;
  payload: Todo[];
}

interface DeleteTodo {
  type: typeof DELETE_TODO;
  payload: Todo[];
}

export type TodoActionTypes = GetTodoList | AddTodo | UpdateTodo | DeleteTodo;
