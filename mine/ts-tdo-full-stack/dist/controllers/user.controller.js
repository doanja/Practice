"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = __importDefault(require("../models"));
const verifyToken_1 = require("../middleware/verifyToken");
const bcryptjs_1 = require("bcryptjs");
class UserController {
    constructor() {
        this.router = express_1.Router();
        this.updatePassword = (req, res) => {
            var _a;
            const { password, newPassword } = req.body;
            models_1.default.User.findById({ _id: (_a = req.token) === null || _a === void 0 ? void 0 : _a._id }).then(user => {
                var _a;
                if (!user)
                    res.status(400).json({ error: 'Cannot find user.' });
                // decrypt password from DB and compare it with the entered password
                else if (!bcryptjs_1.compareSync(password, user.password))
                    res.status(400).json({ error: 'Password incorrect.' });
                // update the password
                else
                    models_1.default.User.findOneAndUpdate({ _id: (_a = req.token) === null || _a === void 0 ? void 0 : _a._id }, { password: bcryptjs_1.hashSync(newPassword) })
                        // TODO: check if password is valid
                        .then(user => res.status(200).json({ message: 'Password updated.' }))
                        .catch(err => res.status(400).json({ error: 'Password cannot be updated.' }));
            });
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
