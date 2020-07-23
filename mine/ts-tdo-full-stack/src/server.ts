require('dotenv').config();
import App from './app';
import { AuthController } from './controllers';
import { TodoRoute, UserRoute } from './routes';

const { NODE_ENV, MONGODB_URI, MONGODB_USER, MONGODB_PASSWORD, MONGODB_PATH } = process.env;

const app = new App(
  4000,
  { MONGODB_URI, MONGODB_USER, MONGODB_PASSWORD, MONGODB_PATH },
  [new TodoRoute(), new UserRoute(), new AuthController()],
  NODE_ENV
);
app.listen();
