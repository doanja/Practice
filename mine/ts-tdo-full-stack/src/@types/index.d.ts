declare namespace Express {
  export interface Request {
    token?: { _id: string; iat: number; exp: number };
  }
}
