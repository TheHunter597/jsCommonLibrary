import { NextFunction, Request, Response } from "express";
import Unauthorized from "../errors/Unauthorized";
import JWT from "../JWT/JWT";
export default function checkUserAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.headers.authorization) {
    return next(new Unauthorized("Please login to do this action."));
  }
  try {
    let userData = JWT.decode(req.headers.authorization);
    if (!userData) {
      return next(new Unauthorized("Please login to do this action."));
    }
    if (userData.is_active === false || userData.account_confirmed === false) {
      return next(new Unauthorized("Please login to do this action."));
    }
    req.user = userData;
    next();
  } catch (error) {
    return next(new Unauthorized("Please login to do this action."));
  }
}
