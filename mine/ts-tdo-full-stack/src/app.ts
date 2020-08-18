import express, { Application } from 'express';
import mongoose from 'mongoose';
import path from 'path';
import passport from 'passport';
import { MongoConfig, Route } from './constants/interfaces';
import { createClient, RedisClient, ClientOpts } from 'redis';

class App {
  public app: Application;
  public port: number;
  public mongoConfig: MongoConfig;
  public redis: RedisClient;
  public environment: string | undefined;

  constructor(port: number, mongoConfig: MongoConfig, routes: Route[], redisUrl: string, environment?: string) {
    this.app = express();
    this.port = port;
    this.mongoConfig = mongoConfig;
    this.redis = createClient(redisUrl);
    this.environment = environment;

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initialzeDBConnection();
  }

  private initializeMiddlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(passport.initialize());

    // serve up static assets (heroku)
    if (this.environment === 'production') this.app.use(express.static('client/build'));
  }

  private initializeRoutes(routes: Route[]) {
    // API routes
    routes.forEach((route: Route) => this.app.use('/', route.router));

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
