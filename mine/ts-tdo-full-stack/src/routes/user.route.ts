import { Router } from 'express';
import Validator from '../middleware/verifyUser';
import { verifyAccessToken } from '../middleware/verifyToken';
import { updatePassword, updateEmail } from '../controllers/user.controller';

export default class UserRoute {
  public router = Router();
  private validator = new Validator();

  constructor() {
    this.router.put('/user/password', [verifyAccessToken, this.validator.validateNewPassword], updatePassword);
    this.router.put('/user/email', [verifyAccessToken, this.validator.validateNewEmail], updateEmail);
  }
}
