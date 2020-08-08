import { TodoListState, TodoListActionTypes } from '../types/todoTypes';
import { Reducer } from 'redux';

const initialState: TodoListState = {
  todoList: [],
  error: undefined,
};

const todoReducer: Reducer<TodoListState> = (state = initialState, action) => {
  switch (action.type) {
    case TodoListActionTypes.GET_TODO_LIST:
      return { ...state, error: state.error, todoList: action.payload };

    case TodoListActionTypes.ADD_TODO:
      return { ...state, error: state.error, todoList: action.payload };

    case TodoListActionTypes.UPDATE_TODO:
      return { ...state, error: state.error, todoList: action.payload };

    case TodoListActionTypes.DELETE_TODO:
      return { ...state, error: state.error, todoList: action.payload };

    case TodoListActionTypes.REQUEST_FAILED: {
      console.log('action', action);
      console.log('action failed');
      return { ...state, error: action.error };
    }

    default:
      return state;
  }
};

export default todoReducer;
