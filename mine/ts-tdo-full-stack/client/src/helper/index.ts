import { decode } from 'jsonwebtoken';

export const checkTokenExp = (token: string) => {
  const decodedToken = decode(token, { complete: true }) as { [key: string]: any };

  return decodedToken.payload.exp > new Date().getTime() / 1000;
};
