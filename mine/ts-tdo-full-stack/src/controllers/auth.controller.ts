import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { Strategy } from 'passport-local';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { User } from '../models';
import { IUser } from '../types';
import { createClient, RedisClient } from 'redis';
import { verifyRefreshToken, generateRefreshToken } from '../helpers/jwt';

export const client: RedisClient = createClient();
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
      const refreshToken: string = generateRefreshToken(user._id.toString(), client);

      return res.status(200).json({ refreshToken });
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

export const getRefreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { refreshToken } = req.body;

    const check = await verifyRefreshToken(req.body.refreshToken, client);
    console.log('check', check);
    // token is verified, send token back as access token
    if (check) {
      const token = generateRefreshToken(refreshToken._id, client);
      res.status(201).json({ refreshToken: token });
    }
  } catch (error) {
    res.status(422).json(error);
  }
};

export const getAccessToken = (req: Request, res: Response, next: NextFunction): void => {
  const { refreshToken } = req.body;
  console.log('req.refreshToken', req.refreshToken);
  // console.log('accessToken', accessToken);
  // refresh token is verified, send access token in response
  res.status(201).json({ accessToken: req.accessToken });
};

export const logout = (req: Request, res: Response, next: NextFunction): void => {
  if (req.refreshToken?._id && deleteRefreshToken(req.refreshToken._id, client)) {
    // const a = deleteRefreshToken(req.refreshToken._id, client);
    console.log('logout working');
    res.status(201).json({ message: 'Logout success' });
  } else res.status(401).json({ error: 'Logout unsuccessful' });
};

// const generateAccessToken = (payload: string): string => {
//   const expiresIn = 900;
//   const accessToken: string = sign({ _id: payload }, 'secret', { expiresIn });

//   return accessToken;
// };
