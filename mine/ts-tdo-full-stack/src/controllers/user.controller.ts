import { Request, Response, Router } from 'express';
import db from '../models';
import Validator from '../middleware/validator';
import { checkJwt } from '../middleware/verifyToken';
import { compareSync, hashSync } from 'bcryptjs';

export default class UserController {
  public router = Router();
  private validator = new Validator();

  constructor() {
    this.router.put('/user/password', [checkJwt, this.validator.validateNewPassword], this.updatePassword);
    this.router.put('/user/email', [checkJwt, this.validator.validateNewEmail], this.updateEmail);
  }

  private updatePassword = (req: Request, res: Response) => {
    const { password, newPassword } = req.body;

    db.User.findById({ _id: req.token?._id }).then(user => {
      // finding user _id fails
      if (!user) res.status(400).json({ error: 'Cannot find user.' });
      // decrypt password fails
      else if (!compareSync(password, user.password)) res.status(400).json({ error: 'Password incorrect.' });
      // update the password
      else
        db.User.findOneAndUpdate({ _id: req.token?._id }, { password: hashSync(newPassword) })
          .then(user => res.status(200).json({ message: 'Password updated.' }))
          .catch(err => res.status(400).json({ error: 'Password cannot be updated.' }));
    });
  };

  private updateEmail = (req: Request, res: Response) => {
    const { password, newEmail } = req.body;

    db.User.findById({ _id: req.token?._id }).then(user => {
      // finding user _id fails
      if (!user) res.status(400).json({ error: 'Cannot find user.' });
      // decrypt password fails
      else if (!compareSync(password, user.password)) res.status(400).json({ error: 'Password incorrect.' });
      // update the email
      else
        db.User.findOneAndUpdate({ _id: req.token?._id }, { email: newEmail })
          .then(user => res.status(200).json({ message: 'Email updated.' }))
          .catch(err => res.status(400).json({ error: 'Email cannot be updated.' }));
    });
  };
}
