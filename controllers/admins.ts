import asyncHandler from "../middlewares/asyncHandler";
import prisma from "../prisma/client";
import errorObj, { errorTypes, invalidEmail } from "../utils/errorObject";
import ErrorResponse from "../utils/errorResponse";
import {
  checkRequiredFields,
  hashPassword,
  validateEmail,
} from "../utils/helperFunctions";

// @desc    Create Admin
// @route   POST /api/v1/admins
// @access  Private (superadmin)
export const createAdmin = asyncHandler(async (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;

  // Check required fields
  const requiredFields = { username, email, password };
  const hasError = checkRequiredFields(requiredFields, next);
  if (hasError !== false) return hasError;

  // Validate Email
  const validEmail = validateEmail(email);
  if (!validEmail) return next(new ErrorResponse(invalidEmail, 400));

  // Hash plain password
  const hashedPassword = await hashPassword(password);

  // Check role is either SUPERADMIN, ADMIN or MODERATOR
  const allowedRoles = ["SUPERADMIN", "ADMIN", "MODERATOR"];
  if (role && !allowedRoles.includes(role)) {
    const roleError = errorObj(
      400,
      errorTypes.invalidArgument,
      "role type is not valid",
      [
        {
          code: "invalidRole",
          message: "role must be one of 'SUPERADMIN', 'ADMIN', and 'MODERATOR'",
        },
      ]
    );
    return next(new ErrorResponse(roleError, 400));
  }

  const admin = await prisma.admin.create({
    data: {
      email,
      password: hashedPassword,
      username,
      role,
    },
  });

  res.status(201).json({
    success: true,
    data: {
      username,
      email,
      password,
    },
  });
});
