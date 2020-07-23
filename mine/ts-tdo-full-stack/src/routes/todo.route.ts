import { Router } from 'express';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todo.controller';
import { verifyJwt } from '../middleware/verifyToken';

export default class TodoRoute {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get('/todo', [verifyJwt], getTodos);
    this.router.post('/todo', [verifyJwt], addTodo);
    this.router.put('/todo/:id', [verifyJwt], updateTodo);
    this.router.delete('/todo/:id', [verifyJwt], deleteTodo);
  }
}
