import { GET_TODO_LIST, ADD_TODO, UPDATE_TODO, DELETE_TODO, TodoActionTypes } from '../types/todoTypes';
import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'react';

export const getTodoList = (todoList: Todo[]): TodoActionTypes => {
  return { type: GET_TODO_LIST, payload: todoList };
};

// export const postPersonActionCreator: ActionCreator<ThunkAction<Promise<GetTodoList>,IPostPersonResult,IPostPerson,IPostedPersonAction>> = (person: IPostPerson) => {
//   return async (dispatch: Dispatch) => {
//     const postingPersonAction: IPostingPersonAction = {
//       type: "PostingPerson",
//     };
//     dispatch(postingPersonAction);
//     const result = await postPersonFromApi(
//       person
//     );
//     const postPersonAction: IPostedPersonAction = {
//       type: "PostedPerson",
//       result,
//     };
//     return dispatch(postPersonAction);
//   };
// };
