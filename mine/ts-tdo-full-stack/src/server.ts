require('dotenv').config();
import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
import mongoose from 'mongoose';

// initialize express
const app: Application = express();
const PORT: any = process.env.PORT || 3001;

// middleware: body parser requests body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') app.use(express.static('client/build'));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('hi');
});

// connect to Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb+srv://${process.env.DB_USR}:${process.env.DB_PW}@todo-list-pmw78.mongodb.net/todolist?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
//   .then(res);
mongoose.set('useCreateIndex', true);

// TODO: add routes

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => res.sendFile(path.join(__dirname, './client/build/index.html')));

// start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}. Visit http://localhost:${PORT}/`));

module.exports = app;
