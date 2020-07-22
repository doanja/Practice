"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = __importDefault(require("../models"));
const verifyUser_1 = __importDefault(require("../middleware/verifyUser"));
const verifyToken_1 = require("../middleware/verifyToken");
const bcryptjs_1 = require("bcryptjs");
class UserController {
    constructor() {
        this.router = express_1.Router();
        this.validator = new verifyUser_1.default();
        this.updatePassword = (req, res) => {
            var _a;
            const { password, newPassword } = req.body;
            models_1.default.User.findById({ _id: (_a = req.token) === null || _a === void 0 ? void 0 : _a._id }).then(user => {
                var _a;
                // finding user _id fails
                if (!user)
                    res.status(400).json({ error: 'Cannot find user.' });
                // decrypt password fails
                else if (!bcryptjs_1.compareSync(password, user.password))
                    res.status(400).json({ error: 'Password incorrect.' });
                // update the password
                else
                    models_1.default.User.findOneAndUpdate({ _id: (_a = req.token) === null || _a === void 0 ? void 0 : _a._id }, { password: bcryptjs_1.hashSync(newPassword) })
                        .then(user => res.status(200).json({ message: 'Password updated.' }))
                        .catch(err => res.status(400).json({ error: 'Password cannot be updated.' }));
            });
        };
        this.updateEmail = (req, res) => {
            var _a;
            const { password, newEmail } = req.body;
            models_1.default.User.findById({ _id: (_a = req.token) === null || _a === void 0 ? void 0 : _a._id }).then(user => {
                var _a;
                // finding user _id fails
                if (!user)
                    res.status(400).json({ error: 'Cannot find user.' });
                // decrypt password fails
                else if (!bcryptjs_1.compareSync(password, user.password))
                    res.status(400).json({ error: 'Password incorrect.' });
                // update the email
                else
                    models_1.default.User.findOneAndUpdate({ _id: (_a = req.token) === null || _a === void 0 ? void 0 : _a._id }, { email: newEmail })
                        .then(user => res.status(200).json({ message: 'Email updated.' }))
                        .catch(err => res.status(400).json({ error: 'Email cannot be updated.' }));
            });
        };
        this.router.put('/user/password', [verifyToken_1.verifyJwt, this.validator.validateNewPassword], this.updatePassword);
        this.router.put('/user/email', [verifyToken_1.verifyJwt, this.validator.validateNewEmail], this.updateEmail);
    }
}
exports.default = UserController;
