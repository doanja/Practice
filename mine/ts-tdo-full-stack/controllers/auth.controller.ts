import { Request, Response, NextFunction, Router } from 'express';
import passport from 'passport';
import { Strategy } from 'passport-local';
import bcrypt from 'bcryptjs';
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
    // this.router.post('/login', this.login);
  }

  signup = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local-signup', { session: false }, (err, user, info) => {
      if (!user || err) return res.status(400).json({ error: info });

      return res.status(200).json(user);
    })(req, res, next);
  };

  // login = (req: Request, res: Response) => {
  //   res.send('login');
  //   // db.Todo.find(req.query)
  //   //   .find(req.query)
  //   //   .then(todos => res.json(todos))
  //   //   .catch(err => res.status(422).json(err));
  // };

  private initSignupStrategy = (): Strategy => {
    return new Strategy({ usernameField: 'email' }, (email, password, done) => {
      db.User.findOne({ email: email.toLowerCase() }, (err, user: IUser) => {
        // if there are any errors, return the error
        if (err) return done(err);

        // check to see if theres already a user with that email
        if (user) return done(null, false, { message: 'That email is already taken.' });
        // create the user
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

        if (!user) return done(null, false, { message: 'Incorrect email.' });

        if (!this.validPassword(password, user.password)) return done(null, false, { message: 'Incorrect password.' });

        return done(undefined, false, { message: 'Invalid email or password.' });
      });
    });
  };

  private validPassword = (password: string, hashPassword: string) => bcrypt.compareSync(hashPassword, password);

  private hashPassword = (password: string) => bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}
