import {
  SET_LOGIN_STATUS,
  AuthActionTypes,
  CLEAR_LOGIN_STATUS,
  SET_ACCESS_TOKEN,
  CLEAR_ACCESS_TOKEN,
  SET_REFRESH_TOKEN,
  CLEAR_REFRESH_TOKEN,
} from '../types/authTypes';

export const setLoginStatus = (loginStatus: boolean): AuthActionTypes => {
  return { type: SET_LOGIN_STATUS, payload: loginStatus };
};

export const clearLoginStatus = (): AuthActionTypes => {
  return { type: CLEAR_LOGIN_STATUS };
};

export const setAccessToken = (accessToken: string): AuthActionTypes => {
  return { type: SET_ACCESS_TOKEN, payload: accessToken };
};

export const clearAccessToken = (): AuthActionTypes => {
  return { type: CLEAR_ACCESS_TOKEN };
};

export const setRefreshToken = (refreshToken: string): AuthActionTypes => {
  return { type: SET_REFRESH_TOKEN, payload: refreshToken };
};

export const clearRefreshToken = (): AuthActionTypes => {
  return { type: CLEAR_REFRESH_TOKEN };
};
