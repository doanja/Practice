import axios from 'axios';

export class AuthService {
  public signup() {
    return axios.post('/signup');
  }

  public login() {
    return axios.post('/login');
  }
}
