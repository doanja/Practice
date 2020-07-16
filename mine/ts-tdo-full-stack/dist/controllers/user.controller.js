"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = __importDefault(require("../models"));
const verifyToken_1 = require("../middleware/verifyToken");
class UserController {
    constructor() {
        this.router = express_1.Router();
        this.updatePassword = (req, res) => {
            var _a;
            const { password, newPassword } = req.body;
            models_1.default.User.findById({ _id: (_a = req.token) === null || _a === void 0 ? void 0 : _a._id })
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
        this.updateEmail = (req, res) => {
            res.send('update email');
            //     db.Todo.find(req.query)
            //       .find(req.query)
            //       .then(todos => res.json(todos))
            //       .catch(err => res.status(422).json(err));
        };
        this.router.put('/user/password', verifyToken_1.checkJwt, this.updatePassword);
        this.router.put('/user/email', verifyToken_1.checkJwt, this.updateEmail);
    }
}
exports.default = UserController;
