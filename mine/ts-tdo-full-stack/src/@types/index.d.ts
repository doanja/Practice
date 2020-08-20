declare namespace Express {
  export interface Request {
    accessToken?: { _id: string; iat: number; exp: number };
    refreshToken?: { _id: string; iat: number; exp: number };
  }
}
