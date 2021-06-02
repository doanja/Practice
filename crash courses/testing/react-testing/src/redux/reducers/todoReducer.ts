import { TodoListState, TodoListActionTypes } from '../types/todoTypes';
import { Reducer } from 'redux';
import { v4 } from 'uuid';

const initialState: TodoListState = {
  todoList: [],
  error: undefined,
};

const todoReducer: Reducer<TodoListState> = (state = initialState, action) => {
  switch (action.type) {
    case TodoListActionTypes.GET_TODO_LIST: {
      return { ...state, error: state.error, todoList: action.payload.todoList };
    }

    case TodoListActionTypes.ADD_TODO: {
      return { ...state, error: state.error, todoList: [...state.todoList, { _id: v4(), text: action.payload.text, isDone: false }] };
    }

    case TodoListActionTypes.UPDATE_TODO: {
      return {
        ...state,
        error: state.error,
        todoList: state.todoList.map((todo: Todo) => (todo._id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo)),
      };
    }

    case TodoListActionTypes.DELETE_TODO:
      return { ...state, error: state.error, todoList: state.todoList.filter((todo: Todo) => todo._id !== action.payload.id) };

    case TodoListActionTypes.REQUEST_FAILED:
      return { ...state, error: action.error };

    default:
      return state;
  }
};

export default todoReducer;
