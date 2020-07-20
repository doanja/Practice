import { Request, Response, NextFunction, Router } from 'express';
import passport from 'passport';
import { Strategy } from 'passport-local';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import db from '../models';
import { IUser } from '../models/User';
import Validator from '../constants/validator';

export default class AuthController {
  public router = Router();
  private validator = new Validator();

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
  }

  signup = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local-signup', { session: false }, (err, user, info) => {
      if (!user || err) return res.status(400).json({ error: info });

      return res.status(200).json(user);
    })(req, res, next);
  };

  login = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local-login', { session: false }, (err, user, info) => {
      if (!user || err) return res.status(400).json({ error: info });

      // generate a signed son web token with the contents of user _id and return it in the response
      req.login(user, { session: false }, () => {
        return res.status(200).json({ token: sign({ _id: user._id }, 'secret', { expiresIn: '1h' }) });
      });
    })(req, res, next);
  };

  private initSignupStrategy = (): Strategy => {
    return new Strategy({ usernameField: 'email' }, (email, password, done) => {
      // validate email, password
      console.log('email', email);
      console.log('password', password);
      db.User.findOne({ email: email.toLowerCase() }, (err, user: IUser) => {
        if (err) return done(err);

        if (user) return done(null, false, { message: 'That email is already taken.' });
        else {
          const newUser = { email, password: hashSync(password, genSaltSync(8)) };
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

        if (!compareSync(password, user.password)) return done(null, false, { message: 'The password is incorrect.' });

        return done(null, user);
      });
    });
  };
}
