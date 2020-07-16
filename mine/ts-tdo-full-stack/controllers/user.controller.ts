import { Request, Response, Router } from 'express';
import db from '../models';
import { checkJwt } from '../middleware/verifyToken';

export default class UserController {
  public router = Router();

  constructor() {
    this.router.put('/user/password', checkJwt, this.updatePassword);
    this.router.put('/user/email', checkJwt, this.updateEmail);
  }

  updatePassword = (req: Request, res: Response) => {
    // console.log('req', req);
    console.log('req.token', req.token);
    res.send('update password');

    // db.Todo.find(req.query)
    //   .find(req.query)
    //   .then(todos => res.json(todos))
    //   .catch(err => res.status(422).json(err));
  };

  updateEmail = (req: Request, res: Response) => {
    res.send('update email');
    //     db.Todo.find(req.query)
    //       .find(req.query)
    //       .then(todos => res.json(todos))
    //       .catch(err => res.status(422).json(err));
  };
}
