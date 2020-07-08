import { Router } from 'express';

export interface Controller {
  router: Router;
}

export interface MongoConfig {
  MONGODB_URI: string | undefined;
  MONGODB_USER: string | undefined;
  MONGODB_PASSWORD: string | undefined;
  MONGODB_PATH: string | undefined;
}
