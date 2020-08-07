import { TodoListState, TodoListActionTypes } from '../types/todoTypes';
import { Reducer } from 'redux';

const initialState: TodoListState = {
  todoList: [],
  loading: false,
  errors: undefined,
};

const todoReducer: Reducer<TodoListState> = (state = initialState, action) => {
  switch (action.type) {
    case TodoListActionTypes.FETCH_TODO_LIST:
      return { ...state, loading: true };

    case TodoListActionTypes.FETCH_TODO_LIST_SUCCESS:
      return { ...state, todoList: action.payload };

    case TodoListActionTypes.FETCH_TODO_LIST_ERROR:
      return { ...state, loading: false, errors: action.payload };

    default:
      return state;
  }
};

export default todoReducer;
