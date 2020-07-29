import { SET_LOGIN_STATUS, AuthActionTypes } from '../types/authTypes';

export const setLoginStatus = (isLoggedIn: boolean): AuthActionTypes => {
  return { type: SET_LOGIN_STATUS, payload: isLoggedIn };
};
