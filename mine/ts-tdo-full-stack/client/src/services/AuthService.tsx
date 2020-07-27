import axios from 'axios';

export default class AuthService {
  public signup(email: string, password: string) {
    console.log('email', email);
    console.log('password', password);
    return axios.post('/signup', { email, password });
  }

  public login(email: string, password: string) {
    return axios.post('/login', { email, password });
  }
}
