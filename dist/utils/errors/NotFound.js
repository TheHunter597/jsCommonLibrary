"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BasicError_1 = __importDefault(require("./BasicError"));
class NotFound extends BasicError_1.default {
    constructor(message, errors) {
        super(message);
        this.statusCode = 404;
        this.errors = errors;
    }
}
exports.default = NotFound;
