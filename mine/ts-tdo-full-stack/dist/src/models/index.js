"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Todo_1 = __importDefault(require("./Todo"));
const User_1 = __importDefault(require("./User"));
exports.default = {
    Todo: Todo_1.default,
    User: User_1.default,
};
