import { Request, Response, Router } from 'express';
import db from '../models';
import { checkJwt } from '../middleware/verifyToken';
import { compareSync, hashSync } from 'bcryptjs';

export default class UserController {
  public router = Router();

  constructor() {
    this.router.put('/user/password', checkJwt, this.updatePassword);
    this.router.put('/user/email', checkJwt, this.updateEmail);
  }

  updatePassword = (req: Request, res: Response) => {
    const { password, newPassword } = req.body;

    db.User.findById({ _id: req.token?._id })
      .then(user => {
        console.log('user', user);
        // const {password} = user;
        // // decrypt password from DB and compare it with the entered password
        // if (!compareSync(user.password, password)) return res.status(400).json({ error: 'Password incorrect.' });
        // // update the password
        // else
        //   db.User.findOneAndUpdate({ _id: req.token?._id }, { password: hashSync(newPassword) })
        //     .then(user => res.status(200).json({ message: 'Password updated.' }))
        //     .catch(err => res.status(400).json({ error: 'Password cannot be updated.' }));
      })
      .catch(err => res.status(400).json({ error: 'Cannot find user.' }));
  };

  updateEmail = (req: Request, res: Response) => {
    res.send('update email');
    //     db.Todo.find(req.query)
    //       .find(req.query)
    //       .then(todos => res.json(todos))
    //       .catch(err => res.status(422).json(err));
  };
}
