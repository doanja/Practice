import { Router } from 'express';
import Validator from '../middleware/verifyUser';
import { verifyJwt } from '../middleware/verifyToken';
import { updatePassword, updateEmail } from '../controllers/user.controller';

export default class UserRoute {
  public router = Router();
  private validator = new Validator();

  constructor() {
    this.router.put('/user/password', [verifyJwt, this.validator.validateNewPassword], updatePassword);
    this.router.put('/user/email', [verifyJwt, this.validator.validateNewEmail], updateEmail);
  }
}
