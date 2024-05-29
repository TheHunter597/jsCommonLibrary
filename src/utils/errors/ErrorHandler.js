"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ErrorHandler(error, req, res, next) {
    var statusCode = error.statusCode, message = error.message, errors = error.errors;
    if (!statusCode) {
        statusCode = 500;
        message = "Internal server error";
    }
    res.status(statusCode).json({
        status: "error",
        message: message,
        errors: errors,
    });
}
exports.default = ErrorHandler;
