import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "../prisma/client";
import { unauthAccess } from "../utils/errorObject";
import ErrorResponse from "../utils/errorResponse";
import { ExtendedRequest } from "../utils/extendedRequest";
import asyncHandler from "./asyncHandler";

export const protect = asyncHandler(async (req: ExtendedRequest, res, next) => {
  let token: string = "";
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse(unauthAccess, 401));
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
    return next(new ErrorResponse(unauthAccess, 401));
  }
});
