import { Request, Response, NextFunction } from 'express';
import { verify, sign } from 'jsonwebtoken';

const extractTokenFromHeader = (req: Request): string | undefined => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }
};

export const verifyAccessToken = (req: Request, res: Response, next: NextFunction) => {
  console.log('verify access token');
  // extract the jwt token from the Authorization header
  const accessToken: string | undefined = extractTokenFromHeader(req);

  if (!accessToken) return res.status(401);

  // try to verify the token and get data
  try {
    verify(accessToken, 'access', (error, payload) => {
      if (error) return res.status(401).send(error);

      const decodedToken: any = payload;

      // refresh the token on every request by setting another 15m
      sign({ _id: decodedToken._id }, 'access', { expiresIn: '5s' }, (error, accessToken) => {
        if (error) return res.status(401).send(error);

        res.setHeader('Authorization', <string>accessToken);

        req.accessToken = decodedToken;
        next();
      });
    });
  } catch (error) {
    return res.status(401).send(error);
  }
};
