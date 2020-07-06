import { Request, Response, NextFunction } from 'express';
import db from '../models';

// define methods for todoController
export default {
  findAll: (req: Request, res: Response) => {
    db.Todo.find(req.query)
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req: Request, res: Response) => {
    db.Todo.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: (req: Request, res: Response) => {
    db.Todo.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  delete: (req: Request, res: Response) => {
    db.Todo.findById({ _id: req.params.id })
      .then(dbModel => dbModel?.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
