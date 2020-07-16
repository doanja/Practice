"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const app_1 = __importDefault(require("./app"));
const controllers_1 = require("../controllers/");
const { NODE_ENV, MONGODB_URI, MONGODB_USER, MONGODB_PASSWORD, MONGODB_PATH } = process.env;
const app = new app_1.default(3000, { MONGODB_URI, MONGODB_USER, MONGODB_PASSWORD, MONGODB_PATH }, [new controllers_1.TodoController(), new controllers_1.UserController(), new controllers_1.AuthController()], NODE_ENV);
app.listen();
