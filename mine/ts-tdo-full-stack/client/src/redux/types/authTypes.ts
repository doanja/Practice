export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const RESET_STATE = 'RESET_STATE';

export interface AuthState {
  isLoggedIn: boolean;
}

interface SetLoginStatus {
  type: typeof SET_LOGIN_STATUS;
  payload: boolean;
}

export type AuthActionTypes = SetLoginStatus;
