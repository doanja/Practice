import { sign, verify } from 'jsonwebtoken';
import { client } from '../controllers/auth.controller';
import createError from 'http-errors';

/**
 * function to sign a refresh token, store it in Redis
 * @param {string} payload the user's ID
 * @return {string} a new refresh token
 */
export const signRefreshToken = (payload: string): Promise<string> => {
  const expiresIn = 86400;

  return new Promise((resolve, reject) => {
    sign({ _id: payload }, 'secret', { expiresIn }, (err: any, refreshToken: any) => {
      if (err) {
        reject(createError(500, 'Internal Server Error'));
      }

      client.set(payload, refreshToken, (err, reply) => {
        if (err) {
          reject(createError(500, 'Internal Server Error'));
          return;
        }
        client.expire(payload, expiresIn);
        resolve(refreshToken);
      });
    });
  });
};

/**
 * function to verify the refresh token and compares it the one in Redis
 * @param {string} refreshToken the refreshToken
 * @return {string} the user's ID
 */
export const verifyRefreshToken = (refreshToken: string): Promise<string> => {
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

        // check refreshToken vs. the refreshToken in memory
        if (refreshToken === result) return resolve(userId);

        reject(createError(401, 'Unathorized'));
      });
    });
  });
};

/**
 * function to delete the user's refreshToken from redis
 * @param {string} refreshToken the refreshToken
 * @return {boolean} true if the key was deleted
 */
export const deleteRefreshToken = (refreshToken: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    verify(refreshToken, 'secret', (err: any, payload: any) => {
      if (err) {
        return reject(createError(401, 'Unathorized'));
      }
      const userId = payload._id;
      client.del(userId, (err, result) => {
        if (err) {
          reject(createError(500, 'Internal Server Error'));
          return;
        }

        //  key was deleted
        return resolve(true);
      });
    });
  });
};

// payload = userId
export const signAccessToken = async (payload: string) => {
  const expiresIn = 600;

  return new Promise((resolve, reject) => {
    sign({ _id: payload }, 'secret', { expiresIn }, (err: any, accessToken: any) => {
      if (err) {
        console.log(err.message);
        reject(createError(500, 'Internal Server Error'));
        return;
      }
      resolve(accessToken);
    });
  });
};
