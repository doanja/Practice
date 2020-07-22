"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = __importDefault(require("../models"));
const verifyToken_1 = require("../middleware/verifyToken");
class TodoController {
    constructor() {
        this.router = express_1.Router();
        this.getTodo = (req, res) => {
            var _a;
            models_1.default.Todo.find({ user: (_a = req.token) === null || _a === void 0 ? void 0 : _a._id })
                .then(todos => res.status(200).json(todos))
                .catch(err => res.status(422).json(err));
        };
        this.createTodo = (req, res) => {
            var _a;
            const newTodo = { text: req.body.text, done: false, user: (_a = req.token) === null || _a === void 0 ? void 0 : _a._id };
            models_1.default.Todo.create(newTodo)
                .then(todos => res.status(200).json(todos))
                .catch(err => res.status(422).json(err));
        };
        this.updateTodo = (req, res) => {
            models_1.default.Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
                .then(todos => res.status(200).json(todos))
                .catch(err => res.status(422).json(err));
        };
        this.deleteTodo = (req, res) => {
            models_1.default.Todo.deleteOne({ _id: req.params.id })
                .then(todos => res.status(200).json(todos))
                .catch(err => res.status(422).json(err));
        };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('/todo', [verifyToken_1.verifyJwt], this.getTodo);
        this.router.post('/todo', [verifyToken_1.verifyJwt], this.createTodo);
        this.router.put('/todo/:id', [verifyToken_1.verifyJwt], this.updateTodo);
        this.router.delete('/todo/:id', [verifyToken_1.verifyJwt], this.deleteTodo);
    }
}
exports.default = TodoController;
