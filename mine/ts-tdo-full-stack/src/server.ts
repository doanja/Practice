require('dotenv').config();
import App from './app';
import { UserController, TodoController, AuthController } from './controllers';

const { NODE_ENV, MONGODB_URI, MONGODB_USER, MONGODB_PASSWORD, MONGODB_PATH } = process.env;

const app = new App(
  4000,
  { MONGODB_URI, MONGODB_USER, MONGODB_PASSWORD, MONGODB_PATH },
  [new TodoController(), new UserController(), new AuthController()],
  NODE_ENV
);
app.listen();
