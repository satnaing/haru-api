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
  invalidEmail,
} from "../utils/errorObject";
import { ExtendedRequest } from "../utils/extendedRequest";

/**
 * Register new customer
 * @route   POST /api/v1/auth/register
 * @access  Public
 */
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

/**
 * Login customer
 * @route   POST /api/v1/auth/login
 * @access  Public
 */
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

/**
 * Get current logged-in user
 * @route   GET /api/v1/auth/me
 * @access  Private
 */
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

/**
 * Update Customer Details (self)
 * @route   PUT /api/v1/auth/update-details
 * @access  Private
 */
export const updateCustomerSelf = asyncHandler(
  async (req: ExtendedRequest, res, next) => {
    const fullname: string | undefined = req.body.fullname;
    const shippingAddress: string | undefined = req.body.shippingAddress;
    const phone: string | undefined = req.body.phone;
    const email: string | undefined = req.body.email;

    // Throws error if email is invalid
    if (email && !validateEmail(email)) {
      return next(new ErrorResponse(invalidEmail, 400));
    }

    const updatedCustomer = await prisma.customer.update({
      where: { id: req!.user!.id },
      data: {
        fullname,
        email,
        shippingAddress,
        phone,
        updatedAt: new Date().toISOString(),
      },
      select: {
        fullname: true,
        email: true,
        shippingAddress: true,
        phone: true,
        updatedAt: true,
      },
    });

    res.status(200).json({
      success: true,
      data: updatedCustomer,
    });
  }
);

/**
 * Update Customer Password (self)
 * @route   PUT /api/v1/auth/change-password
 * @access  Private
 */
export const changePassword = asyncHandler(
  async (req: ExtendedRequest, res, next) => {
    const currentPassword = req.body.currentPassword;
    const newPassword = req.body.newPassword;

    // Check required fields
    const requiredFields = { currentPassword, newPassword };
    const hasError = checkRequiredFields(requiredFields, next);
    if (hasError !== false) return hasError;

    // Check current password is correct
    const correctPassword = await comparePassword(
      currentPassword,
      req!.user!.password
    );

    // Throws error if current password is incorrect
    if (!correctPassword)
      return next(
        new ErrorResponse(
          {
            ...incorrectCredentialsError,
            message: "current password is incorrect",
          },
          401
        )
      );

    // Hash new password
    const hashedPassword = await hashPassword(newPassword);

    await prisma.customer.update({
      where: { id: req!.user!.id },
      data: { password: hashedPassword },
    });

    res.status(200).json({
      success: true,
      message: "password has been updated",
    });
  }
);
