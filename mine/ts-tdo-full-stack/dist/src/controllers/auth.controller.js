"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const models_1 = __importDefault(require("../models"));
const verifyUser_1 = __importDefault(require("../middleware/verifyUser"));
class AuthController {
    constructor() {
        this.router = express_1.Router();
        this.validator = new verifyUser_1.default();
        this.initializeStrategies = () => {
            passport_1.default.use('local-signup', this.initSignupStrategy());
            passport_1.default.use('local-login', this.initLoginStrategy());
            return passport_1.default.initialize();
        };
        this.signup = (req, res, next) => {
            passport_1.default.authenticate('local-signup', { session: false }, (err, user, info) => {
                if (!user || err)
                    return res.status(400).json({ error: info });
                return res.status(200).json(user);
            })(req, res, next);
        };
        this.login = (req, res, next) => {
            passport_1.default.authenticate('local-login', { session: false }, (err, user, info) => {
                if (!user || err)
                    return res.status(400).json({ error: info });
                // generate a signed son web token with the contents of user _id and return it in the response
                req.login(user, { session: false }, () => {
                    return res.status(200).json({ token: jsonwebtoken_1.sign({ _id: user._id }, 'secret', { expiresIn: '1h' }) });
                });
            })(req, res, next);
        };
        this.initSignupStrategy = () => {
            return new passport_local_1.Strategy({ usernameField: 'email' }, (email, password, done) => {
                models_1.default.User.findOne({ email: email.toLowerCase() }, (err, user) => {
                    if (err)
                        return done(err);
                    if (user)
                        return done(null, false, { message: 'That email is already taken.' });
                    else {
                        const newUser = { email, password: bcryptjs_1.hashSync(password, bcryptjs_1.genSaltSync(8)) };
                        models_1.default.User.create(newUser);
                        return done(null, newUser);
                    }
                });
            });
        };
        this.initLoginStrategy = () => {
            return new passport_local_1.Strategy({ usernameField: 'email', passwordField: 'password' }, (email, password, done) => {
                models_1.default.User.findOne({ email: email.toLowerCase() }, (err, user) => {
                    if (err)
                        return done(err);
                    if (!user)
                        return done(null, false, { message: 'That email is not found.' });
                    if (!bcryptjs_1.compareSync(password, user.password))
                        return done(null, false, { message: 'The password is incorrect.' });
                    return done(null, user);
                });
            });
        };
        this.initializeRoutes();
        this.initializeStrategies();
    }
    initializeRoutes() {
        this.router.post('/signup', [this.validator.validatePassword, this.validator.validateEmail], this.signup);
        this.router.post('/login', [this.validator.validatePassword, this.validator.validateEmail], this.login);
    }
}
exports.default = AuthController;
