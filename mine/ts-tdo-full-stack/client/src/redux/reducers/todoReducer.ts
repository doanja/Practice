import { TodoListState, TodoListActionTypes } from '../types/todoTypes';
import { Reducer } from 'redux';

const initialState: TodoListState = {
  todoList: [],
  loading: false,
  errors: undefined,
};

const todoReducer: Reducer<TodoListState> = (state = initialState, action) => {
  switch (action.type) {
    case TodoListActionTypes.GET_TODO_LIST:
      return { ...state, loading: true };

    case TodoListActionTypes.GET_TODO_LIST_SUCCESS:
      return { ...state, todoList: action.payload };

    case TodoListActionTypes.REQUEST_FAILURE:
      return { ...state, loading: false, errors: action.payload };

    case TodoListActionTypes.ADD_TODO:
      return { errors: state.errors, loading: state.loading, todoList: action.payload };

    case TodoListActionTypes.UPDATE_TODO: {
      return { errors: state.errors, loading: state.loading, todoList: action.payload };
    }

    case TodoListActionTypes.DELETE_TODO: {
      return { errors: state.errors, loading: state.loading, todoList: action.payload };
    }

    default:
      return state;
  }
};

export default todoReducer;
