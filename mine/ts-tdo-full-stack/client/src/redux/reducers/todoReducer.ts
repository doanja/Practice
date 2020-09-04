import { TodoListState, TodoListActionTypes } from '../types/todoTypes';
import { Reducer } from 'redux';

const initialState: TodoListState = {
  todoList: [],
  error: undefined,
  token: '',
};

const todoReducer: Reducer<TodoListState> = (state = initialState, action) => {
  switch (action.type) {
    case TodoListActionTypes.GET_TODO_LIST:
      return { ...state, error: state.error, todoList: action.payload, token: action.token };

    case TodoListActionTypes.ADD_TODO:
      return { ...state, error: state.error, todoList: action.payload, token: action.token };

    case TodoListActionTypes.UPDATE_TODO:
      return { ...state, error: state.error, todoList: action.payload, token: action.token };

    case TodoListActionTypes.DELETE_TODO:
      return { ...state, error: state.error, todoList: action.payload, token: action.token };

    case TodoListActionTypes.REQUEST_FAILED:
      return { ...state, error: action.error };

    default:
      return state;
  }
};

export default todoReducer;
