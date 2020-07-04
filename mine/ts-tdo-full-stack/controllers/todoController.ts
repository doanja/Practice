import db from '../models';
import { Request, Response } from 'express';

// define methods for todoController
export default {
  findAll: (req: Request, res: Response) =>
    db.Todo.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)),
};
