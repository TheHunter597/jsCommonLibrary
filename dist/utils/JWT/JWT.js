"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JWT {
    static decode(token) {
        let userData = jsonwebtoken_1.default.verify(token.split(" ")[1], process.env.JWTSECRET);
        return userData;
    }
}
exports.default = JWT;
