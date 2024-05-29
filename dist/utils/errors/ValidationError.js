"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BasicError_1 = __importDefault(require("./BasicError"));
class ValidationError extends BasicError_1.default {
    constructor(message, errors) {
        super(message);
        this.statusCode = 400;
        this.errors = this.serializeErrors(errors);
    }
    serializeErrors(err) {
        try {
            let finalErrors = {};
            let elements = Object.keys(err.errors);
            for (let element of elements) {
                finalErrors[element] = [err.errors[element].message];
            }
            return finalErrors;
        }
        catch (err) {
            return {};
        }
    }
}
exports.default = ValidationError;
