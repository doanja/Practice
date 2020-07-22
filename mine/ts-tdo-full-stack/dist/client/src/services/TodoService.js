"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const axios_1 = __importDefault(require("axios"));
class TodoService {
    getTodos() {
        return axios_1.default.get(``);
    }
    addTodo(text) {
        return axios_1.default.get(``);
    }
    updateTodo(id) {
        return axios_1.default.get(``);
    }
    deleteTodo(id) {
        return axios_1.default.get(``);
    }
}
exports.TodoService = TodoService;
