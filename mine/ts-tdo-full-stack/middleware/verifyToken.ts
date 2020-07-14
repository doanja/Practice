import { Request, Response, NextFunction } from 'express';
import { verify, sign } from 'jsonwebtoken';

const extractTokenFromHeader = (req: Request) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }
};

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  // extract the jwt token from the Authorization header
  const token = extractTokenFromHeader(req);

  let jwtPayload;

  // try to validate the token and get data
  if (token) {
    jwtPayload = verify(token, 'secret');
    res.locals.jwtPayload = jwtPayload;
  } else {
    // if token is not valid, respond with 401 (unauthorized)
    return res.status(401).send({ error: 'You should be logged in to access this url' });
  }

  // refresh the token on every request by setting another 1h
  const { _id } = jwtPayload;

  const newToken = sign({ _id }, 'secret', { expiresIn: '1h' });

  res.setHeader('Authorization', 'Bearer ' + newToken);

  next();
};

export default checkJwt;
