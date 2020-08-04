export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
export const CLEAR_LOGIN_STATUS = 'CLEAR_LOGIN_STATUS';
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const CLEAR_AUTH_TOKEN = 'CLEAR_AUTH_TOKEN';

export interface AuthState {
  loginStatus: boolean;
  authToken: string;
}

interface SetLoginStatus {
  type: typeof SET_LOGIN_STATUS;
  payload: boolean;
}

interface ClearLoginStatus {
  type: typeof CLEAR_LOGIN_STATUS;
}

interface SetAuthToken {
  type: typeof SET_AUTH_TOKEN;
  payload: string;
}

interface ClearAuthToken {
  type: typeof CLEAR_AUTH_TOKEN;
}

export type AuthActionTypes = SetLoginStatus | ClearLoginStatus | SetAuthToken | ClearAuthToken;
