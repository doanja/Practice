import { sign } from 'jsonwebtoken';
import { IUser } from '../types';

export const getRefreshToken = (payload: IUser, storage: any) => {
  // get all user's refresh tokens from DB
  const userRefreshTokens = storage.get(payload._id);

  // if there are no refresh tokens
  if (!userRefreshTokens) {
    const refreshToken = sign({ _id: payload._id }, 'secret', { expiresIn: 86400 });

    // update storage
    storage.set(payload._id, refreshToken);

    return refreshToken;
  }
  // remove all refresh tokens except for one if there's 5 or mroe belonging to the user
  else if (userRefreshTokens.length >= 5) {
    storage.set(
      payload._id,
      userRefreshTokens.filter((token: string) => token !== payload._id)
    );
  }

  // otherwise, add the user's token to storage
  const refreshToken = sign({ _id: payload._id }, 'secret', { expiresIn: 86400 });

  storage.set(payload._id, [...storage.get(payload._id), refreshToken]);

  console.log('storage', storage);

  return refreshToken;
};
