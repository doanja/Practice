import express, { Application } from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { MongoConfig, Controller } from '../constants/interfaces';

class App {
  public app: Application;
  public port: number;
  public mongoConfig: MongoConfig;
  public NODE_ENV: string | undefined;

  constructor(port: number, mongoConfig: MongoConfig, controllers: Controller[], NODE_ENV?: string) {
    this.app = express();
    this.port = port;
    this.mongoConfig = mongoConfig;
    this.NODE_ENV = NODE_ENV;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initialzeDBConnection();
  }

  private initializeMiddlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

    // serve up static assets (heroku)
    if (this.NODE_ENV === 'production') this.app.use(express.static('client/build'));
  }

  private initializeControllers(controllers: Controller[]) {
    // TODO: add routes and then remove this
    this.app.get('/', (req, res) => res.send('this is home'));

    // API routes
    controllers.forEach((controller: Controller) => this.app.use('/', controller.router));

    // Send every other request to the React app (Define any API routes before this runs)
    this.app.get('*', (req, res) => res.sendFile(path.join(__dirname, './client/build/index.html')));
  }

  private initialzeDBConnection() {
    const { MONGODB_URI, MONGODB_USER, MONGODB_PASSWORD, MONGODB_PATH } = this.mongoConfig;

    mongoose
      .connect(MONGODB_URI || `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}${MONGODB_PATH}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })
      .then(res => console.log('DATABASE CONNECTED'))
      .catch(err => console.log('ERROR CONNECTING TO DATABASE:', err));
  }

  public listen() {
    // start the server
    this.app.listen(this.port, () => console.log(`Server started on port ${this.port}. Visit http://localhost:${this.port}/`));
  }
}

export default App;
