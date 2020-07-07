require('dotenv').config();
import path from 'path';
import App from './app';
import todoController from '../controllers/todo.controller';

const { NODE_ENV, MONGODB_URI, MONGODB_USER, MONGODB_PASSWORD, MONGODB_PATH } = process.env;

const MONGO_INFO = { MONGODB_URI, MONGODB_USER, MONGODB_PASSWORD, MONGODB_PATH };

// // TODO: add routes
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.send('hi');
// });

// // Send every other request to the React app
// // Define any API routes before this runs
// app.get('*', (req, res) => res.sendFile(path.join(__dirname, './client/build/index.html')));

const app = new App(3000, MONGO_INFO, todoController);

app.listen();
