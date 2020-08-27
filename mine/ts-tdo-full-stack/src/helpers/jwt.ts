import { RedisClient } from 'redis';
import { sign, verify } from 'jsonwebtoken';

// function to verify refreshToken sent in body vs. the one in memory (redis)
export const verifyRefreshToken = (refreshToken: any, client: RedisClient) => {
  //   let decodedToken: any;

  //   // try to validate the token and get the _id
  //   try {
  //     decodedToken = verify(<string>refreshToken, 'secret', (err: any, payload: any) => {
  //       if (err) return false;
  //       client.get(payload._id, (err, result) => {
  //         if (err) {
  //           console.log(err.message);
  //           return false;
  //         }
  //         if (refreshToken === result) {
  //           console.log('returning true');
  //           return true;
  //         }
  //       });
  //     });
  //   } catch (error) {
  //     // if token is not valid, respond with 401 (unauthorized)
  //     return false;
  //   }
  return new Promise((resolve, reject) => {
    verify(refreshToken, 'secret', (err: any, payload: any) => {
      if (err) return reject('err');
      const userId = payload._id;
      client.GET(userId, (err, result) => {
        if (err) {
          console.log(err.message);
          reject('err 2');
          return;
        }
        if (refreshToken === result) return resolve(userId);
        reject('err 3');
      });
    });
  });
};

// TODO: check if this works
export const generateRefreshToken = (payload: string, client: RedisClient): string => {
  console.log('generateRefreshToken');
  const expiresIn = 86400;
  const refreshToken: string = sign({ _id: payload }, 'secret', { expiresIn });

  // client.get(payload, function (err, reply) {
  //   console.log('before', reply);
  // });

  // TODO: check how to conditionally return
  client.set(payload, refreshToken, function (err, reply) {
    client.expire(payload, expiresIn);
  });

  // client.get(payload, function (err, reply) {
  //   console.log('after', reply);
  // });
  console.log('refreshToken', refreshToken);
  return refreshToken;
};

export const deleteRefreshToken = (payload: string, client: RedisClient): boolean => {
  // TODO: check how to conditionally return
  client.del(payload, function (err, reply) {
    if (reply) {
      console.log('deleting refresh token');
      return true;
    } else return false;
  });

  return false;
};
