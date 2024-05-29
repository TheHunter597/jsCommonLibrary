import { NextFunction, Request, Response } from "express";
import BadRequest from "../errors/BadRequest";

export default function validateInputs(
  requiredElements: string[],
  customError?: string
) {
  return (req: Request, res: Response, next: NextFunction) => {
    let errors: any = {};
    requiredElements.forEach((element: any) => {
      if (!req.body[element]) {
        errors[element] = ["This field is required."];
      }
    });
    if (errors && Object.keys(errors).length > 0) {
      return next(
        new BadRequest(customError || "Missing required fields", errors)
      );
    } else {
      next();
    }
  };
}
