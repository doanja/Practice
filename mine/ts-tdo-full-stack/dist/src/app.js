"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const passport_1 = __importDefault(require("passport"));
class App {
    constructor(port, mongoConfig, controllers, environment) {
        this.app = express_1.default();
        this.port = port;
        this.mongoConfig = mongoConfig;
        this.environment = environment;
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initialzeDBConnection();
    }
    initializeMiddlewares() {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
        this.app.use(passport_1.default.initialize());
        // serve up static assets (heroku)
        if (this.environment === 'production')
            this.app.use(express_1.default.static('client/build'));
    }
    initializeControllers(controllers) {
        // TODO: add routes and then remove this
        this.app.get('/', (req, res) => res.send('this is home'));
        // API routes
        controllers.forEach((controller) => this.app.use('/', controller.router));
        // Send every other request to the React app (Define any API routes before this runs)
        this.app.get('*', (req, res) => res.sendFile(path_1.default.join(__dirname, './client/build/index.html')));
    }
    initialzeDBConnection() {
        const { MONGODB_URI, MONGODB_USER, MONGODB_PASSWORD, MONGODB_PATH } = this.mongoConfig;
        mongoose_1.default
            .connect(MONGODB_URI || `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}${MONGODB_PATH}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        })
            .then(res => console.log('DATABASE CONNECTED'))
            .catch(err => console.log('ERROR CONNECTING TO DATABASE:', err));
    }
    listen() {
        // start the server
        this.app.listen(this.port, () => console.log(`Server started on port ${this.port}. Visit http://localhost:${this.port}/`));
    }
}
exports.default = App;
