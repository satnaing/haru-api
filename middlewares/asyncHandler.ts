import { Request, Response, NextFunction } from "express";
import { ExtendedRequest } from "../utils/extendedRequest";

type Function = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

const asyncHandler =
  (fn: Function) =>
  (req: Request | ExtendedRequest, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
