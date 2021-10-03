import { ErrorRequestHandler } from "express";
import errorObj, { defaultError, errorTypes } from "../utils/errorObject";
import ErrorResponse from "../utils/errorResponse";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let error = { ...err };

  if (process.env.NODE_ENV === "development") {
    console.log("Error Handler get called");
    console.error(err);
  }

  // Some error
  // if(err.name === "someError") {
  //   const message = `Resource not found with id of ${err.value}`;
  //   error = new ErrorResponse(message, 404)
  // }

  // Unique constraint failed
  if (err.code === "P2002") {
    const uniqueConstraintError = errorObj(
      400,
      errorTypes.alreadyExists,
      `${err.meta.target[0]} already exists`
    );
    error = new ErrorResponse(uniqueConstraintError, 400);
  }

  // Record to do something not found
  if (err.code === "P2025") {
    const errNotFoundObj = errorObj(
      404,
      errorTypes.notFound,
      (err.meta.cause as string).toLowerCase()
    );
    error = new ErrorResponse(errNotFoundObj, 404);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.errObj || defaultError,
  });
};

export default errorHandler;
