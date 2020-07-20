import { Request, Response, Router } from 'express';
import db from '../models';
import { checkJwt } from '../middleware/verifyToken';

export default class TodoController {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get('/todo', [checkJwt], this.getTodo);
    this.router.post('/todo', [checkJwt], this.createTodo);
    this.router.put('/todo/:id', [checkJwt], this.updateTodo);
    this.router.delete('/todo/:id', [checkJwt], this.deleteTodo);
  }

  getTodo = (req: Request, res: Response) => {
    db.Todo.find({ user: req.token?._id })
      .then(todos => res.status(200).json(todos))
      .catch(err => res.status(422).json(err));
  };

  createTodo = (req: Request, res: Response) => {
    const newTodo = { text: req.body.text, done: false, user: req.token?._id };

    db.Todo.create(newTodo)
      .then(todos => res.status(200).json(todos))
      .catch(err => res.status(422).json(err));
  };

  updateTodo = (req: Request, res: Response) => {
    db.Todo.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(todos => res.status(200).json(todos))
      .catch(err => res.status(422).json(err));
  };

  deleteTodo = (req: Request, res: Response) => {
    db.Todo.deleteOne({ _id: req.params.id })
      .then(todos => res.status(200).json(todos))
      .catch(err => res.status(422).json(err));
  };
}
