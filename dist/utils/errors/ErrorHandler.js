"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ErrorHandler(error, req, res, next) {
    let { statusCode, message, errors } = error;
    if (!statusCode) {
        statusCode = 500;
        message = "Internal server error";
    }
    res.status(statusCode).json({
        status: "error",
        message,
        errors,
    });
}
exports.default = ErrorHandler;
