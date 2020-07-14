import { Request, Response, NextFunction, Router } from 'express';
import db from '../models';
import checkJwt from '../middleware/verifyToken';
import { verify } from 'jsonwebtoken';

export default class UserController {
  public router = Router();

  constructor() {
    this.router.put('/user/password', this.updatePassword);
    this.router.put('/user/email', this.updateEmail);
  }

  updatePassword = (req: Request, res: Response) => {
    console.log('checkJwt', checkJwt);
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
