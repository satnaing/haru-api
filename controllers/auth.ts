import bcrypt from "bcrypt";
import asyncHandler from "../middlewares/asyncHandler";
import prisma from "../prisma/client";
import {
  checkRequiredFields,
  comparePassword,
  generateToken,
  hashPassword,
  validateEmail,
} from "../utils/helperFunctions";
import ErrorResponse from "../utils/errorResponse";
import errorObj, {
  errorTypes,
  incorrectCredentialsError,
} from "../utils/errorObject";
import { ExtendedRequest } from "../utils/extendedRequest";

// @desc    Register New Customer
// @route   POST /api/v1/auth/register
// @access  Public
export const registerCustomer = asyncHandler(async (req, res, next) => {
  const email: string = req.body.email;
  const fullname: string = req.body.fullname;
  let password: string = req.body.password;
  const shippingAddress: string = req.body.shippingAddress;
  const phone: string = req.body.phone; // null

  // Check required fields
  const requiredFields = { email, fullname, password, shippingAddress };
  const hasError = checkRequiredFields(requiredFields, next);
  if (hasError !== false) return hasError;

  // Validate email
  if (!validateEmail(email)) {
    const emailError = errorObj(
      400,
      errorTypes.invalidArgument,
      "email is not valid"
    );
    return next(new ErrorResponse(emailError, 400));
  }

  // Hash password
  password = await hashPassword(password);

  const customer = await prisma.customer.create({
    data: {
      email,
      fullname,
      password,
      shippingAddress,
      phone,
    },
  });

  const token = generateToken(customer.id, customer.email);

  res.status(201).json({
    success: true,
    token: token,
  });
});

// @desc    Login Customer
// @route   POST /api/v1/auth/login
// @access  Public
export const loginCustomer = asyncHandler(async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  // Check required fields
  const requiredFields = { email, password };
  const hasError = checkRequiredFields(requiredFields, next);
  if (hasError !== false) return hasError;

  const customer = await prisma.customer.findUnique({
    where: { email },
  });

  // Throws error if customer does not exist
  if (!customer) {
    return next(new ErrorResponse(incorrectCredentialsError, 401));
  }

  // Check pwd with hashed pwd stored in db
  const result = await comparePassword(password, customer.password);

  // Throws error if password is incorrect
  if (!result) {
    return next(new ErrorResponse(incorrectCredentialsError, 401));
  }

  const token = generateToken(customer.id, customer.email);

  res.status(200).json({
    success: true,
    token: token,
  });
});

// @desc    Get Current Logged-in User
// @route   GET /api/v1/auth/me
// @access  Private
export const getMe = asyncHandler(async (req: ExtendedRequest, res, next) => {
  const user = await prisma.customer.findUnique({
    where: { id: req!.user!.id },
    select: {
      id: true,
      fullname: true,
      email: true,
      shippingAddress: true,
      phone: true,
    },
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});
