"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const extractTokenFromHeader = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
};
exports.checkJwt = (req, res, next) => {
    // extract the jwt token from the Authorization header
    const token = extractTokenFromHeader(req);
    let decoded;
    // try to validate the token and get data
    try {
        decoded = jsonwebtoken_1.verify(token, 'secret');
    }
    catch (error) {
        // if token is not valid, respond with 401 (unauthorized)
        return res.status(401).send({ error: `${error.name}: ${error.message}.` });
    }
    // refresh the token on every request by setting another 1h
    const newToken = jsonwebtoken_1.sign({ _id: decoded._id }, 'secret', { expiresIn: '1h' });
    res.setHeader('Authorization', 'Bearer ' + newToken);
    req.token = decoded;
    next();
};
