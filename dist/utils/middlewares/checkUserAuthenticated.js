"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Unauthorized_1 = __importDefault(require("../errors/Unauthorized"));
const JWT_1 = __importDefault(require("../JWT/JWT"));
function checkUserAuthenticated(req, res, next) {
    if (!req.headers.authorization) {
        return next(new Unauthorized_1.default("Please login to do this action."));
    }
    try {
        let userData = JWT_1.default.decode(req.headers.authorization);
        if (!userData) {
            return next(new Unauthorized_1.default("Please login to do this action."));
        }
        if (userData.is_active === false || userData.account_confirmed === false) {
            return next(new Unauthorized_1.default("Please login to do this action."));
        }
        req.user = userData;
        next();
    }
    catch (error) {
        return next(new Unauthorized_1.default("Please login to do this action."));
    }
}
exports.default = checkUserAuthenticated;
