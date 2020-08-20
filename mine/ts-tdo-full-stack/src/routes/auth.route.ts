import { Router } from 'express';
import passport from 'passport';
import Validator from '../middleware/verifyUser';
import { signup, login, initSignupStrategy, initLoginStrategy, getRefreshToken, getAccessToken } from '../controllers/auth.controller';
import { verifyRefreshToken } from '../middleware/verifyToken';

export default class AuthRoute {
  public router = Router();
  private validator = new Validator();

  constructor() {
    this.initializeRoutes();
    this.initializeStrategies();
  }

  public initializeStrategies = () => {
    passport.use('local-signup', initSignupStrategy());
    passport.use('local-login', initLoginStrategy());

    return passport.initialize();
  };

  public initializeRoutes() {
    this.router.post('/signup', [this.validator.validatePassword, this.validator.validateEmail], signup);
    this.router.post('/login', [this.validator.validatePassword, this.validator.validateEmail], login);
    this.router.post('/refresh-token', verifyRefreshToken, getRefreshToken);
    this.router.post('/access-token', verifyRefreshToken, getAccessToken);
  }
}
