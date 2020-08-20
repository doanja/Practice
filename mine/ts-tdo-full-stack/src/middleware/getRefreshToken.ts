import { sign } from 'jsonwebtoken';
import { RedisError, RedisClient } from 'redis';

export const refreshToken = (payload: string, client: RedisClient): string => {
  const refreshToken: string = sign({ _id: payload }, 'secret', { expiresIn: 86400 });

  // client.set(payload._id, refreshToken);

  // client.get(_id, (error: RedisError, rep: any) => {
  //   if (error)
  //     //  return error here?
  //     return undefined;
  // });

  return refreshToken;
};

export const clearRefreshToken = (payload: string, client: any): boolean => {
  // search for token in client, if found remove and return true
  // otherwise return false
  return true;
};
