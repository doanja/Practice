import express, { Application } from 'express';
import mongoose from 'mongoose';
import path from 'path';

interface MongoConfig {
  MONGODB_URI: string | undefined;
  MONGODB_USER: string | undefined;
  MONGODB_PASSWORD: string | undefined;
  MONGODB_PATH: string | undefined;
}

class App {
  public app: Application;
  public port: number;
  public mongoConfig: MongoConfig;
  public NODE_ENV?: string;

  constructor(port: number, mongoConfig: MongoConfig, controllers?: any, NODE_ENV?: string) {
    this.app = express();
    this.port = port;
    this.mongoConfig = mongoConfig;
    this.NODE_ENV = NODE_ENV;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeMongoConnection();
  }

  private initializeMiddlewares() {
    // this.app.use(bodyParser.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

    // serve up static assets (usually on heroku)
    if (this.NODE_ENV === 'production') this.app.use(express.static('client/build'));
  }

  private initializeControllers(controllers: any) {
    if (typeof controllers === 'undefined') return;

    // console.log('controllers', controllers);

    // TODO: add routes
    this.app.get('/', (req, res) => res.send('this is home'));

    controllers.forEach((controller: any) => this.app.use('/', controller.router));

    // Send every other request to the React app (Define any API routes before this runs)
    this.app.get('*', (req, res) => res.sendFile(path.join(__dirname, './client/build/index.html')));
  }

  private initializeMongoConnection() {
    const { MONGODB_URI, MONGODB_USER, MONGODB_PASSWORD, MONGODB_PATH } = this.mongoConfig;
    // connect to Mongo DB
    mongoose
      .connect(MONGODB_URI || `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}${MONGODB_PATH}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then(res => console.log('db connected'))
      .catch(err => console.log(err));
  }

  public listen() {
    // start the server
    this.app.listen(this.port, () => console.log(`Server started on port ${this.port}. Visit http://localhost:${this.port}/`));
  }
}

export default App;
