require('dotenv').config();
import App from './app';
import TodoController from '../controllers/todo.controller';

const { NODE_ENV, MONGODB_URI, MONGODB_USER, MONGODB_PASSWORD, MONGODB_PATH } = process.env;
const MONGO_INFO = { MONGODB_URI, MONGODB_USER, MONGODB_PASSWORD, MONGODB_PATH };

const app = new App(3000, MONGO_INFO, [new TodoController()], NODE_ENV);

app.listen();
