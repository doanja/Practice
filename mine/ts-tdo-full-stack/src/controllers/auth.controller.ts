import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { Strategy } from 'passport-local';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import { createClient } from 'redis';
import { User } from '../models';
import { IUser } from '../types';
import { getRefreshToken } from '../middleware/getRefreshToken';

const storage = new Map(); // key: user id, value: refreshTokens[]

export const signup = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('local-signup', { session: false }, (err, user, info) => {
    if (!user || err) return res.status(400).json({ error: info });

    return res.status(200).json(user);
  })(req, res, next);
};

export const login = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('local-login', { session: false }, (err, user, info) => {
    if (!user || err) return res.status(400).json({ error: info });

    // generate a signed son web token with the contents of user _id and return it in the response
    req.login(user, { session: false }, () => {
      const token = sign({ _id: user._id }, 'secret', { expiresIn: 300 });

      //
      // const refreshToken = sign({ _id: user._id }, 'secret', { expiresIn: 86400 });
      const refreshToken = getRefreshToken(user, storage);

      // const decodedToken = verify(token, 'secret') as { _id: string; iat: number; exp: number };

      // // add refresh token to redis
      storage.set(user._id, refreshToken);

      return res.status(200).json({ token, refreshToken /*, expiry: decodedToken.exp */ });
    });
  })(req, res, next);
};

export const initSignupStrategy = (): Strategy => {
  return new Strategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }, (err, user: IUser) => {
      if (err) return done(err);

      if (user) return done(null, false, { message: 'That email is already taken.' });
      else {
        const newUser = { email, password: hashSync(password, genSaltSync(8)) };
        User.create(newUser);

        return done(null, newUser);
      }
    });
  });
};

export const initLoginStrategy = (): Strategy => {
  return new Strategy({ usernameField: 'email', passwordField: 'password' }, (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }, (err, user: IUser) => {
      if (err) return done(err);

      if (!user) return done(null, false, { message: 'That email is not found.' });

      if (!compareSync(password, user.password)) return done(null, false, { message: 'The password is incorrect.' });

      return done(null, user);
    });
  });
};
