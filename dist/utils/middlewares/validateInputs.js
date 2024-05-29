"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BadRequest_1 = __importDefault(require("../errors/BadRequest"));
function validateInputs(requiredElements, customError) {
    return (req, res, next) => {
        let errors = {};
        requiredElements.forEach((element) => {
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
