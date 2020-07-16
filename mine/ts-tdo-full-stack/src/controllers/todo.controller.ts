import { Request, Response, Router } from 'express';
import db from '../models';

export default class TodoController {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get('/todo', this.getTodo);
    this.router.post('/todo', this.createTodo);
    this.router.put('/todo/:id', this.updateTodo);
    this.router.delete('/todo/:id', this.deleteTodo);
  }

  getTodo = (req: Request, res: Response) => {
    db.Todo.find(req.query)
      .then(todos => res.status(200).json(todos))
      .catch(err => res.status(422).json(err));
  };

  createTodo = (req: Request, res: Response) => {
    db.Todo.create(req.body)
      .then(todos => res.status(200).json(todos))
      .catch(err => res.status(422).json(err));
  };

  updateTodo = (req: Request, res: Response) => {
    db.Todo.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(todos => res.status(200).json(todos))
      .catch(err => res.status(422).json(err));
  };

  deleteTodo = (req: Request, res: Response) => {
    db.Todo.findById({ _id: req.params.id })
      .then(todos => todos?.remove())
      .then(todos => res.status(200).json(todos))
      .catch(err => res.status(422).json(err));
  };
}
