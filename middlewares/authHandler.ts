import { NextFunction, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "../prisma/client";
import errorObj, {
  errorTypes,
  authRequiredError,
  unauthorizedError,
} from "../utils/errorObject";
import ErrorResponse from "../utils/errorResponse";
import { ExtendedRequest } from "../utils/extendedRequest";
import asyncHandler from "./asyncHandler";

/**
 * Middleware for protected routes
 * @description used in routes before auth required controllers
 * @return auth error | next()
 */
export const protect = asyncHandler(async (req: ExtendedRequest, res, next) => {
  let token: string = "";
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse(authRequiredError, 401));
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = await prisma.customer.findUnique({
      where: { id: parseInt((decoded as JwtPayload).id) },
    });
    next();
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(authRequiredError, 401));
  }
});

/**
 * Middleware for admin only routes
 * @description used in routes before auth required controllers
 * @return auth error | next()
 */
export const adminOnly = asyncHandler(
  async (req: ExtendedRequest, res, next) => {
    let token: string = "";
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return next(new ErrorResponse(authRequiredError, 401));
    }

    // Verify token
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
      req.admin = await prisma.admin.findUnique({
        where: { id: parseInt((decoded as JwtPayload).id) },
      });
      next();
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse(authRequiredError, 401));
    }
  }
);

/**
 * Authorized Middleware
 * @param roles - "SUPERADMIN", "ADMIN", "MODERATOR"
 * @returns authorize error | next()
 */
export const authorize =
  (...roles: string[]) =>
  (req: ExtendedRequest, res: Response, next: NextFunction) => {
    if (!roles.includes(req!.admin!.role)) {
      return next(new ErrorResponse(unauthorizedError, 403));
    }
    next();
  };
