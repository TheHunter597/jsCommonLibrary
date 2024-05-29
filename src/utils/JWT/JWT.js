"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var JWT = /** @class */ (function () {
    function JWT() {
    }
    JWT.decode = function (token) {
        var userData = jsonwebtoken_1.default.verify(token.split(" ")[1], process.env.JWTSECRET);
        return userData;
    };
    return JWT;
}());
exports.default = JWT;
