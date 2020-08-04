import { GET_TODO_LIST, ADD_TODO, UPDATE_TODO, DELETE_TODO, TodoActionTypes, PostedTodoList, GotTodoListAction, GetTodoAction } from '../types/todoTypes';
import { ActionCreator, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'react';
import { TodoService } from '../../services';

const api = new TodoService();

export const getTodoList = (todoList: Todo[]): TodoActionTypes => {
  return { type: GET_TODO_LIST, payload: todoList };
};

export const getTodoListAction: ActionCreator<ThunkAction<

  Promise<PostedTodoList>,
 
  Todo[],
  
  null,
 
  GotTodoListAction
>> = () => {
  return async (dispatch: Dispatch) => {
    const gettingTodoListAction: GetTodoAction = {
      type: "GettingTodoList",
    };
    dispatch(gettingTodoListAction);
    const people = await api.getTodos();
    console.log('people', people)
    const gotPeopleAction: GotTodoListAction = {
      payload: Todo[],
      type: "GotTodoList",
    };
    return dispatch(gotPeopleAction);
  };
};