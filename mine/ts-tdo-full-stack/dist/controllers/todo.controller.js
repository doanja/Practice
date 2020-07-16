"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = __importDefault(require("../models"));
class TodoController {
    constructor() {
        this.router = express_1.Router();
        this.getTodo = (req, res) => {
            models_1.default.Todo.find(req.query)
                .find(req.query)
                .then(todos => res.status(200).json(todos))
                .catch(err => res.status(422).json(err));
        };
        this.createTodo = (req, res) => {
            models_1.default.Todo.create(req.body)
                .then(todos => res.status(200).json(todos))
                .catch(err => res.status(422).json(err));
        };
        this.updateTodo = (req, res) => {
            models_1.default.Todo.findOneAndUpdate({ _id: req.params.id }, req.body)
                .then(todos => res.status(200).json(todos))
                .catch(err => res.status(422).json(err));
        };
        this.deleteTodo = (req, res) => {
            models_1.default.Todo.findById({ _id: req.params.id })
                .then(todos => todos === null || todos === void 0 ? void 0 : todos.remove())
                .then(todos => res.status(200).json(todos))
                .catch(err => res.status(422).json(err));
        };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('/todo', this.getTodo);
        this.router.post('/todo', this.createTodo);
        this.router.put('/todo/:id', this.updateTodo);
        this.router.delete('/todo/:id', this.deleteTodo);
    }
}
exports.default = TodoController;
