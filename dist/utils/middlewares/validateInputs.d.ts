import { NextFunction, Request, Response } from "express";
export default function validateInputs(requiredElements: string[], customError?: string): (req: Request, res: Response, next: NextFunction) => void;
