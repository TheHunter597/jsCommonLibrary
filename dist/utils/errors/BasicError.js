"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasicError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.default = BasicError;
