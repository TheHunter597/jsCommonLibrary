import { Request, NextFunction, Response } from "express";

export default function ErrorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
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
