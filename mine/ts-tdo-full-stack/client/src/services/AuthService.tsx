import axios from 'axios';

export default class AuthService {
  public signup(email: string, password: string) {
    return axios.post('/signup', { email, password });
  }

  public login(email: string, password: string) {
    return axios.post('/login', { email, password });
  }

  public logout() {
    return axios.post('/logout');
  }

  public getRefreshToken() {
    return axios.post('/refresh-token');
  }

  public getAccessToken() {
    return axios.post('/access-token');
  }
}
