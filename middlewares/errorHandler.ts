import { ErrorRequestHandler } from "express";
import ErrorResponse from "../utils/ErrorResponse";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let error = { ...err };

  // Some error
  // if(err.name === "someError") {
  //   const message = `Resource not found with id of ${err.value}`;
  //   error = new ErrorResponse(message, 404)
  // }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Internal Server Error",
  });
};

export default errorHandler;
