"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Unauthorized_1 = require("../errors/Unauthorized");
var JWT_1 = require("../JWT/JWT");
function checkUserAuthenticated(req, res, next) {
    if (!req.headers.authorization) {
        return next(new Unauthorized_1.default("Authentication credentials were not provided."));
    }
    try {
        var userData = JWT_1.default.decode(req.headers.authorization);
        if (!userData) {
            return next(new Unauthorized_1.default("Authentication credentials were not provided."));
        }
        if (userData.is_acitve === false || userData.account_confirmed === false) {
            return next(new Unauthorized_1.default("Authentication credentials were not provided."));
        }
        req.user = userData;
        next();
    }
    catch (error) {
        return next(new Unauthorized_1.default("Authentication credentials were not provided."));
    }
}
exports.default = checkUserAuthenticated;
