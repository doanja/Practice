require('dotenv').config();
import App from './app';
import { TodoRoute, UserRoute, AuthRoute } from './routes';

const { NODE_ENV, MONGODB_URI, MONGODB_USER, MONGODB_PASSWORD, MONGODB_PATH } = process.env;

const app = new App(
  4000,
  { MONGODB_URI, MONGODB_USER, MONGODB_PASSWORD, MONGODB_PATH },
  [new TodoRoute(), new UserRoute(), new AuthRoute()],
  NODE_ENV
);

app.listen();
