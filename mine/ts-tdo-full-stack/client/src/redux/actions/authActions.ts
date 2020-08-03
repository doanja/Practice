import { SET_LOGIN_STATUS, AuthActionTypes, CLEAR_LOGIN_STATUS, SET_AUTH_TOKEN, CLEAR_AUTH_TOKEN } from '../types/authTypes';

export const setLoginStatus = (isLoggedIn: boolean): AuthActionTypes => {
  console.log('setLoginStatus called', isLoggedIn);
  return { type: SET_LOGIN_STATUS, payload: isLoggedIn };
};

export const clearLoginStatus = (): AuthActionTypes => {
  return { type: CLEAR_LOGIN_STATUS };
};

export const setAuthToken = (authToken: string): AuthActionTypes => {
  return { type: SET_AUTH_TOKEN, payload: authToken };
};

export const clearAuthToken = (): AuthActionTypes => {
  return { type: CLEAR_AUTH_TOKEN };
};
