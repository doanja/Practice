import { Request, Response, NextFunction } from 'express';
import { verify, sign } from 'jsonwebtoken';

const extractTokenFromHeader = (req: Request): string | undefined => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }
};

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
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

  // refresh the token on every request by setting another 1h
  const newToken = sign({ _id: decodedToken._id }, 'secret', { expiresIn: '1h' });
  res.setHeader('Authorization', 'Bearer ' + newToken);

  req.token = decodedToken;

  next();
};
