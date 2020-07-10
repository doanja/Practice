import { Router } from 'express';
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
    passport.use('local-login', this.initLoginStrategy());
    passport.use('local-login', this.initSignupStrategy());
    return passport.initialize();
  };

  public initializeRoutes() {
    // this.router.post('/signup', this.signup);
    // this.router.post('/login', this.login);
  }

  // signup = (req: Request, res: Response) => {
  //   res.send('signup');
  //   // db.Todo.find(req.query)
  //   //   .find(req.query)
  //   //   .then(todos => res.json(todos))
  //   //   .catch(err => res.status(422).json(err));
  // };

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
        if (err) return done(err);

        if (!user) return done(null, false, { message: 'Email already in use.' });
        else {
          // create user
          db.User.create({ email, password: this.hashPassword(password) });
        }

        return done(undefined, false, { message: 'Error signing up with email or password.' });
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
