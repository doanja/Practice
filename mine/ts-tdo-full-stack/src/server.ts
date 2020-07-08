require('dotenv').config();
import App from './app';
import { UserController, TodoController } from '../controllers/';
console.log('UserController', UserController);
console.log('TodoController', TodoController);
const { NODE_ENV, MONGODB_URI, MONGODB_USER, MONGODB_PASSWORD, MONGODB_PATH } = process.env;
const MONGO_INFO = { MONGODB_URI, MONGODB_USER, MONGODB_PASSWORD, MONGODB_PATH };

const app = new App(3000, MONGO_INFO, [new TodoController(), new UserController()], NODE_ENV);

app.listen();
