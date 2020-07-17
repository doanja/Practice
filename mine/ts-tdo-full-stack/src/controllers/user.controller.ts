import { Request, Response, Router } from 'express';
import db from '../models';
import { checkJwt } from '../middleware/verifyToken';
import { compareSync, hashSync } from 'bcryptjs';
import { string } from 'yup';

export default class UserController {
  public router = Router();
  private passwordSchema: any;
  private emailSchema: any;

  constructor() {
    this.router.put('/user/password', checkJwt, this.validatePassword);
    this.router.put('/user/email', checkJwt, this.validateEmail);
    this.passwordSchema = this.initPasswordSchema();
    this.emailSchema = this.initEmailSchema();
  }

  private initPasswordSchema = () => string().min(8).max(32).required();

  private initEmailSchema = () => string().required().email();

  validatePassword = async (req: Request, res: Response) => {
    try {
      await this.passwordSchema.validate(req.body.newPassword);
      this.updatePassword(req, res);
    } catch (err) {
      return res.status(400).json({ error: `${err.name}: ${err.message}.` });
    }
  };

  validateEmail = async (req: Request, res: Response) => {
    try {
      await this.emailSchema.validate(req.body.newEmail);
      this.updateEmail(req, res);
    } catch (err) {
      return res.status(400).json({ error: `${err.name}: ${err.message}.` });
    }
  };

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
          // TODO: check if password is valid
          .then(user => res.status(200).json({ message: 'Password updated.' }))
          .catch(err => res.status(400).json({ error: 'Password cannot be updated.' }));
    });
  };

  private updateEmail = (req: Request, res: Response) => {
    res.send('update email');
    //     db.Todo.find(req.query)
    //       .find(req.query)
    //       .then(todos => res.json(todos))
    //       .catch(err => res.status(422).json(err));
  };
}
