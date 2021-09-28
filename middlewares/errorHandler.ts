import { ErrorRequestHandler } from "express";
import { defaultError } from "../utils/errorObject";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let error = { ...err };

  // Some error
  // if(err.name === "someError") {
  //   const message = `Resource not found with id of ${err.value}`;
  //   error = new ErrorResponse(message, 404)
  // }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.errObj || defaultError,
  });
};

export default errorHandler;
