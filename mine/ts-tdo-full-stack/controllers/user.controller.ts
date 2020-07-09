import { Request, Response, Router } from 'express';
import db from '../models';

export default class UserController {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get('/logout', this.logout);
    this.router.put('/user', this.updatePassword);
  }

  logout = (req: Request, res: Response) => {
    res.send('logout');
    // db.Todo.find(req.query)
    //   .find(req.query)
    //   .then(todos => res.json(todos))
    //   .catch(err => res.status(422).json(err));
  };

  updatePassword = (req: Request, res: Response) => {
    res.send('update password');
    //     db.Todo.find(req.query)
    //       .find(req.query)
    //       .then(todos => res.json(todos))
    //       .catch(err => res.status(422).json(err));
  };
}
