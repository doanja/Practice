import { TodoState, TodoActionTypes, GET_TODO_LIST, ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../types/todoTypes';

const initialState: TodoState = {
  todoList: [],
};

const todoReducer = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case GET_TODO_LIST:
      return { ...state, todoLists: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
