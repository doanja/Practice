import { Request, Response, NextFunction } from 'express';
import { verify, sign } from 'jsonwebtoken';

const extractTokenFromHeader = (req: Request): string | undefined => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }
};

export const verifyAccessToken = (req: Request, res: Response, next: NextFunction) => {
  // extract the jwt token from the Authorization header
  const token = extractTokenFromHeader(req);

  let decodedToken: any;

  // try to validate the token and get data
  try {
    decodedToken = verify(<string>token, 'secret');
  } catch (error) {
    // if token is not valid, respond with 401 (unauthorized)
    return res.status(401).json(error);
  }

  // refresh the token on every request by setting another 15m
  const newToken = sign({ _id: decodedToken._id }, 'secret', { expiresIn: 900 });
  res.setHeader('Authorization', 'Bearer ' + newToken);

  req.accessToken = decodedToken;

  next();
};

// TODO: check where this token is pulling from
// TODO: do i need to verify the user's token or should i have them relog in
// TODO: should be updating the user's refreshToken in every call ? if yes, update redis
export const verifyRefreshToken = (req: Request, res: Response, next: NextFunction) => {
  // extract the jwt token from the Authorization header
  const { refreshToken } = req.body;

  let decodedToken: any;

  // try to validate the token and get data
  try {
    decodedToken = verify(<string>refreshToken, 'secret');
  } catch (error) {
    // if token is not valid, respond with 401 (unauthorized)
    return res.status(401).json(error);
  }

  // refresh the token on every request by setting another 24h
  // const newToken = sign({ _id: decodedToken._id }, 'secret', { expiresIn: 86400 });
  // res.setHeader('Authorization', 'Bearer ' + newToken);

  req.refreshToken = decodedToken;

  next();
};
