import { Request, Response, Router } from 'express';
import db from '../models';

export default class UserController {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.put('/user/password', this.updatePassword);
    this.router.put('/user/email', this.updateEmail);
  }

  updatePassword = (req: Request, res: Response) => {
    res.send('update password');
    //     db.Todo.find(req.query)
    //       .find(req.query)
    //       .then(todos => res.json(todos))
    //       .catch(err => res.status(422).json(err));
  };

  updateEmail = (req: Request, res: Response) => {
    res.send('update email');
    //     db.Todo.find(req.query)
    //       .find(req.query)
    //       .then(todos => res.json(todos))
    //       .catch(err => res.status(422).json(err));
  };
}
