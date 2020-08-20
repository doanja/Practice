import { Router } from 'express';
import Validator from '../middleware/verifyUser';
import { verifyToken } from '../middleware/verifyToken';
import { updatePassword, updateEmail } from '../controllers/user.controller';

export default class UserRoute {
  public router = Router();
  private validator = new Validator();

  constructor() {
    this.router.put('/user/password', [verifyToken, this.validator.validateNewPassword], updatePassword);
    this.router.put('/user/email', [verifyToken, this.validator.validateNewEmail], updateEmail);
  }
}
