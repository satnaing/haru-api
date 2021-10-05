import asyncHandler from "../middlewares/asyncHandler";
import prisma from "../prisma/client";
import bcrypt from "bcrypt";
import { checkRequiredFields, validateEmail } from "../utils/helperFunctions";
import ErrorResponse from "../utils/errorResponse";
import errorObj, { errorTypes } from "../utils/errorObject";

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

  res.status(201).json({
    success: true,
    token: "some token",
  });
});