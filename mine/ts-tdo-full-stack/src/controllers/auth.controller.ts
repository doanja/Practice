import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { Strategy } from 'passport-local';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { User } from '../models';
import { IUser } from '../types';
import { refreshToken, clearRefreshToken } from '../middleware/getRefreshToken';
import { createClient, RedisClient } from 'redis';

const client: RedisClient = createClient('redis://127.0.0.1');
client.on('connect', () => console.log('REDIS CONNECTED'));

export const signup = (req: Request, res: Response, next: NextFunction): void => {
  passport.authenticate('local-signup', { session: false }, (err, user, info) => {
    if (!user || err) return res.status(400).json({ error: info });

    return res.status(200).json(user);
  })(req, res, next);
};

export const login = (req: Request, res: Response, next: NextFunction): void => {
  passport.authenticate('local-login', { session: false }, (err, user, info) => {
    if (!user || err) return res.status(400).json({ error: info });

    // generate a signed son web token with the contents of user _id and return it in the response
    req.login(user, { session: false }, () => {
      // const token = sign({ _id: user._id }, 'secret', { expiresIn: 300 });

      // const refreshToken = sign({ _id: user._id }, 'secret', { expiresIn: 86400 });
      const token: string = refreshToken(user._id, client);

      return res.status(200).json({ refreshToken: token });
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

export const getRefreshToken = (req: Request, res: Response, next: NextFunction): void => {
  // token is verified, send token back as access token
  if (req.token?._id) {
    const token = refreshToken(req.token?._id, client);
    res.status(201).json({ refreshToken: token });
  } else {
    res.status(404).json({ error: 'token not found in body' });
  }
};

export const getAccessToken = (req: Request, res: Response, next: NextFunction): void => {
  // refresh token is verified, send access token in response
  res.status(201).json({ accessToken: req.token });
};

export const logout = (req: Request, res: Response, next: NextFunction): void => {
  if (req.token?._id) {
    clearRefreshToken(req.token._id, client)
      ? res.status(201).json({ message: 'logout success' })
      : res.status(401).json({ error: 'logout unsuccessful' });
  }
};
