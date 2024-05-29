"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BadRequest_1 = require("../errors/BadRequest");
function validateInputs(requiredElements, customError) {
    return function (req, res, next) {
        var errors = {};
        requiredElements.forEach(function (element) {
            if (!req.body[element]) {
                errors[element] = ["This field is required."];
            }
        });
        if (errors && Object.keys(errors).length > 0) {
            return next(new BadRequest_1.default(customError || "Missing required fields", errors));
        }
        else {
            next();
        }
    };
}
exports.default = validateInputs;
