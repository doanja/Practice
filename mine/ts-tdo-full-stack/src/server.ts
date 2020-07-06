require('dotenv').config();
import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
import mongoose from 'mongoose';
const { NODE_ENV, PORT, MONGODB_URI, MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;

// initialize express
const app: Application = express();
const port: any = PORT || 3001;

// middleware: body parser requests body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve up static assets (usually on heroku)
if (NODE_ENV === 'production') app.use(express.static('client/build'));

// connect to Mongo DB
mongoose
  .connect(MONGODB_URI || `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(res => console.log('db connected'))
  .catch(err => console.log(err));

// TODO: add routes
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('hi');
});

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req: Request, res: Response, next: NextFunction) => res.sendFile(path.join(__dirname, './client/build/index.html')));

// start the server
app.listen(PORT, () => console.log(`Server started on port ${port}. Visit http://localhost:${port}/`));

module.exports = app;
