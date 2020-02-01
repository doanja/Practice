import { FETCH_USER_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './userTypes';
import Axios from 'axios';

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  };
};

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  };
};

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsers); // set loading to user to true
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const users = res.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch(err => {
        const errorMsg = err.Message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
