import bcrypt from "bcrypt";
import asyncHandler from "../middlewares/asyncHandler";
import prisma from "../prisma/client";
import {
  checkRequiredFields,
  generateToken,
  validateEmail,
} from "../utils/helperFunctions";
import ErrorResponse from "../utils/errorResponse";
import errorObj, { errorTypes, unauthError } from "../utils/errorObject";

const saltRounds = 10;

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
  password = await bcrypt.hash(password, saltRounds);

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

  if (!customer) {
    return next(new ErrorResponse(unauthError, 401));
  }

  const result = await bcrypt.compare(password, customer.password);

  if (!result) {
    return next(new ErrorResponse(unauthError, 401));
  }

  const token = generateToken(customer.id, customer.email);

  res.status(200).json({
    success: true,
    token: token,
  });
});
