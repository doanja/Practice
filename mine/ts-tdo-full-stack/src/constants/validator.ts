import { Request, Response, NextFunction } from 'express';
import { string } from 'yup';

export default class Validator {
  private passwordSchema: any;
  private emailSchema: any;

  constructor() {
    this.passwordSchema = this.initPasswordSchema();
    this.emailSchema = this.initEmailSchema();
  }

  private initPasswordSchema = () => string().min(8).max(32).required();

  private initEmailSchema = () => string().required().email();

  public validatePassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.passwordSchema.validate(req.body.newPassword);
      console.log('validate pw success');
      next();
    } catch (err) {
      return res.status(400).json({ error: `${err.name}: ${err.message}.` });
    }
  };

  public validateEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.emailSchema.validate(req.body.newEmail);
      console.log('validate email success');
      next();
    } catch (err) {
      return res.status(400).json({ error: `${err.name}: ${err.message}.` });
    }
  };
}
