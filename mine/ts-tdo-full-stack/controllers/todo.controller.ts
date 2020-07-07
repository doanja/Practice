import { Request, Response, Router } from 'express';
import db from '../models';

class TodoController {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get('/todo', this.findAll);
    this.router.post('/todo', this.create);
    this.router.put('/todo/:id', this.update);
    this.router.delete('/todo/:id', this.delete);
  }

  findAll = (req: Request, res: Response) => {
    db.Todo.find(req.query)
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  };

  create = (req: Request, res: Response) => {
    console.log('req.body', req.body);
    db.Todo.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  };

  update = (req: Request, res: Response) => {
    db.Todo.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  };

  delete = (req: Request, res: Response) => {
    db.Todo.findById({ _id: req.params.id })
      .then(dbModel => dbModel?.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  };
}

export default TodoController;
