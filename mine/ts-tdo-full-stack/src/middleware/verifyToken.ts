import { Request, Response, NextFunction } from 'express';
import { verify, sign } from 'jsonwebtoken';
import createError from 'http-errors';

const extractTokenFromHeader = (req: Request): string | undefined => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }
};

export const verifyAccessToken = (req: Request, res: Response, next: NextFunction) => {
  // extract the jwt token from the Authorization header
  const accessToken: string | undefined = extractTokenFromHeader(req);

  if (!accessToken) return next(createError(401, 'Unauthorized'));

  // try to verify the token and get data
  try {
    verify(accessToken, 'secret', (err, payload) => {
      if (err) return next(createError(401, 'Unauthorized'));

      const decodedToken: any = payload;

      // refresh the token on every request by setting another 15m
      const newToken = sign({ _id: decodedToken._id }, 'secret', { expiresIn: 900 }, (err, payload) => {
        if (err) return next(createError(500, 'Internal Server Error'));

        res.setHeader('Authorization', 'Bearer ' + newToken);

        req.accessToken = decodedToken;
        next();
      });
    });
  } catch (error) {
    // if token is not valid, respond with 401 (unauthorized)
    return next(createError(401, 'Unauthorized'));
  }
};
