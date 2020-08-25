export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
export const CLEAR_LOGIN_STATUS = 'CLEAR_LOGIN_STATUS';

export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
export const CLEAR_ACCESS_TOKEN = 'CLEAR_ACCESS_TOKEN';

export const SET_REFRESH_TOKEN = 'SET_REFRESH_TOKEN';
export const CLEAR_REFRESH_TOKEN = 'CLEAR_REFRESH_TOKEN';

export interface AuthState {
  loginStatus: boolean;
  accessToken: string;
  refreshToken: string;
}

interface SetLoginStatus {
  type: typeof SET_LOGIN_STATUS;
  payload: boolean;
}

interface ClearLoginStatus {
  type: typeof CLEAR_LOGIN_STATUS;
}

interface SetAccessToken {
  type: typeof SET_ACCESS_TOKEN;
  payload: string;
}

interface ClearAccessToken {
  type: typeof CLEAR_ACCESS_TOKEN;
}

interface SetRefreshToken {
  type: typeof SET_REFRESH_TOKEN;
  payload: string;
}

interface ClearRefreshToken {
  type: typeof CLEAR_REFRESH_TOKEN;
}

export type AuthActionTypes = SetLoginStatus | ClearLoginStatus | SetAccessToken | ClearAccessToken | SetRefreshToken | ClearRefreshToken;
