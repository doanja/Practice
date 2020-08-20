import { Router } from 'express';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todo.controller';
import { verifyToken } from '../middleware/verifyToken';

export default class TodoRoute {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get('/todo', [verifyToken], getTodos);
    this.router.post('/todo', [verifyToken], addTodo);
    this.router.put('/todo/:id', [verifyToken], updateTodo);
    this.router.delete('/todo/:id', [verifyToken], deleteTodo);
  }
}
