import { sign, verify } from 'jsonwebtoken';
import { client } from '../controllers/auth.controller';
import createError from 'http-errors';

// function to verify refreshToken sent in body vs. the one in memory (redis)
export const verifyRefreshToken = (refreshToken: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    verify(refreshToken, 'secret', (err: any, payload: any) => {
      if (err) {
        return reject(createError(401, 'Unathorized'));
      }
      const userId = payload._id;
      client.get(userId, (err, result) => {
        if (err) {
          reject(createError(500, 'Internal Server Error'));
          return;
        }

        if (refreshToken === result) return resolve(userId);

        reject(createError(401, 'Unathorized'));
      });
    });
  });
};

/**
 * function to sign a refresh token, store it in Redis
 * @param payload the user's ID
 * @return the refreshToken string
 */
export const signRefreshToken = (payload: string): Promise<string> => {
  const expiresIn = 86400;

  return new Promise((resolve, reject) => {
    sign({ _id: payload }, 'secret', { expiresIn }, (err: any, token: any) => {
      if (err) {
        reject(createError(500, 'Internal Server Error'));
      }

      client.set(payload, token, (err, reply) => {
        if (err) {
          reject(createError(500, 'Internal Server Error'));
          return;
        }
        client.expire(payload, expiresIn);
        resolve(token);
      });
    });
  });
};

export const deleteRefreshToken = (payload: string): boolean => {
  // TODO: check how to conditionally return
  client.del(payload, function (err, reply) {
    if (reply) {
      console.log('deleting refresh token');
      return true;
    } else return false;
  });

  return false;
};
