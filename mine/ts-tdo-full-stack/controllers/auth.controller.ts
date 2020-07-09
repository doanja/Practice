import { Request, Response, Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { Strategy, ExtractJwt } from 'passport-jwt';
import db from '../models';

export default class AuthController {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public initialize = () => {
    passport.use('local', this.getStrategy());
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

  private getStrategy = (): Strategy => {
    const params = {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeader(),
      passReqToCallback: true,
    };

    return new Strategy(params, (req, payload: any, done) => {
      db.User.findOne({ _id: payload._id }, (err, user) => {
        /* istanbul ignore next: passport response */
        if (err) {
          return done(err);
        }
        /* istanbul ignore next: passport response */
        if (user === null) {
          return done(null, false, { message: 'The user in the token was not found' });
        }

        return done(null, { _id: user._id, username: user.username });
      });
    });
  };
}
