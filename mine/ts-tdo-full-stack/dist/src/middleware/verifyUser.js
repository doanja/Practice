"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
class Validator {
    constructor() {
        this.initPasswordSchema = () => yup_1.string().min(8).max(32).required();
        this.initEmailSchema = () => yup_1.string().required().email();
        this.validateNewPassword = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.passwordSchema.validate(req.body.newPassword);
                next();
            }
            catch (err) {
                return res.status(400).json({ error: `${err.name}: ${err.message}.` });
            }
        });
        this.validateNewEmail = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.emailSchema.validate(req.body.newEmail);
                next();
            }
            catch (err) {
                return res.status(400).json({ error: `${err.name}: ${err.message}.` });
            }
        });
        this.validatePassword = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.passwordSchema.validate(req.body.password);
                next();
            }
            catch (err) {
                return res.status(400).json({ error: `${err.name}: ${err.message}.` });
            }
        });
        this.validateEmail = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.emailSchema.validate(req.body.email);
                next();
            }
            catch (err) {
                return res.status(400).json({ error: `${err.name}: ${err.message}.` });
            }
        });
        this.passwordSchema = this.initPasswordSchema();
        this.emailSchema = this.initEmailSchema();
    }
}
exports.default = Validator;
