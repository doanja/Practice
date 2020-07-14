import { Request, Response, NextFunction, Router } from 'express';
import passport from 'passport';
import { Strategy } from 'passport-local';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import db from '../models';
import { IUser } from '../models/User';

export default class AuthController {
  public router = Router();

  constructor() {
    this.initializeRoutes();
    this.initializeStrategies();
  }

  public initializeStrategies = () => {
    passport.use('local-signup', this.initSignupStrategy());
    passport.use('local-login', this.initLoginStrategy());

    return passport.initialize();
  };

  public initializeRoutes() {
    this.router.post('/signup', this.signup);
    this.router.post('/login', this.login);
    this.router.get('/logout', this.logout);
  }

  signup = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local-signup', { session: false }, (err, user, info) => {
      if (!user || err) return res.status(400).json({ error: info });

      return res.status(200).json(user);
    })(req, res, next);
  };

  login = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local-login', { session: false }, (err, user, info) => {
      // redirect if there was an issue with the login
      if (!user || err) return res.status(403).json({ error: info });

      // logging in the user
      req.login(user, { session: false }, err => {
        if (err) res.status(400).json({ error: err });

        // generate a signed son web token with the contents of user object and return it in the response
        sign({ _id: user._id }, 'secret', (err: any, token: any) => res.status(200).json({ token }));
      });
    })(req, res, next);
  };

  logout = (req: Request, res: Response) => {
    req.logout();
    res.status(200).json({ data: 'Logout sucessful' });
  };

  private initSignupStrategy = (): Strategy => {
    return new Strategy({ usernameField: 'email' }, (email, password, done) => {
      db.User.findOne({ email: email.toLowerCase() }, (err, user: IUser) => {
        if (err) return done(err);

        if (user) return done(null, false, { message: 'That email is already taken.' });
        else {
          const newUser = { email, password: this.hashPassword(password) };
          db.User.create(newUser);

          return done(null, newUser);
        }
      });
    });
  };

  private initLoginStrategy = (): Strategy => {
    return new Strategy({ usernameField: 'email', passwordField: 'password' }, (email, password, done) => {
      db.User.findOne({ email: email.toLowerCase() }, (err, user: IUser) => {
        if (err) return done(err);

        if (!user) return done(null, false, { message: 'That email is not found.' });

        if (!this.validPassword(password, user.password)) return done(null, false, { message: 'The password is incorrect.' });

        return done(null, user);
      });
    });
  };

  private validPassword = (password: string, hashPassword: string) => compareSync(password, hashPassword);

  private hashPassword = (password: string) => hashSync(password, genSaltSync(8));
}
