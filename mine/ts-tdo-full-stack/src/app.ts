import express, { Application } from 'express';
import mongoose from 'mongoose';

interface MongoInfo {
  MONGODB_URI: string;
  MONGODB_USER: string;
  MONGODB_PASSWORD: string;
  MONGODB_PATH: string;
}

class App {
  public app: Application;
  public port: number;
  public mongo: MongoInfo;
  public NODE_ENV?: string;

  constructor(port: number, mongo: MongoInfo, controllers?: any, NODE_ENV?: string) {
    this.app = express();
    this.port = port;
    this.mongo = mongo;
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
    controllers.forEach((controller: any) => this.app.use('/', controller.router));
  }

  private initializeMongoConnection() {
    const { MONGODB_URI, MONGODB_USER, MONGODB_PASSWORD, MONGODB_PATH } = this.mongo;
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
