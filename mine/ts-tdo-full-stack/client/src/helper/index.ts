import { decode } from 'jsonwebtoken';

export const checkTokenExp = (token: string) => {
  console.log('token', token);
  const decodedToken = decode(token, { complete: true }) as { [key: string]: any };

  return decodedToken.payload.exp > new Date().getTime() / 1000;
};
