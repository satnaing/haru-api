import asyncHandler from "../middlewares/asyncHandler";
import prisma from "../prisma/client";
import { customers, categories, products, admins } from "../db/data";
import {
  invalidEmail,
  incorrectCredentialsError,
  resource404Error,
  roleError,
  unauthorizedError,
} from "../utils/errorObject";
import ErrorResponse from "../utils/errorResponse";
import { ExtendedRequest } from "../utils/extendedRequest";
import {
  checkRequiredFields,
  checkRole,
  comparePassword,
  generateToken,
  hashPassword,
  validateEmail,
} from "../utils/helperFunctions";

/**
 * Create admin
 * @route   POST /api/v1/admins
 * @access  Private (superadmin)
 */
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
  if (role !== undefined) {
    if (!checkRole(role)) return next(new ErrorResponse(roleError, 400));
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

/**
 * Login admin
 * @route   POST /api/v1/admins/login
 * @access  PUBLIC
 */
export const loginAdmin = asyncHandler(async (req, res, next) => {
  const email: string | undefined = req.body.email;
  const password: string | undefined = req.body.password;

  // Throws error if required fields not specify
  const requiredFields = { email, password };
  const hasError = checkRequiredFields(requiredFields, next);
  if (hasError !== false) return hasError;

  const admin = await prisma.admin.findUnique({
    where: { email },
  });

  // Throws error if email is incorrect
  if (!admin) {
    return next(new ErrorResponse(incorrectCredentialsError, 401));
  }

  // Check pwd with hashed pwd stored in db
  const result = await comparePassword(password as string, admin.password);

  // Throws error if password is incorrect
  if (!result) {
    return next(new ErrorResponse(incorrectCredentialsError, 401));
  }

  // Generate a jwt
  const token = generateToken(admin.id, admin.email);

  res.status(200).json({
    success: true,
    token,
  });
});

/**
 * Get current logged-in admin
 * @route   GET /api/v1/admins/me
 * @access  Private
 */
export const getMe = asyncHandler(async (req: ExtendedRequest, res, next) => {
  const user = await prisma.admin.findUnique({
    where: { id: req!.admin!.id },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
    },
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

/**
 * Change current logged-in admin password
 * @route   PUT /api/v1/admins/change-password
 * @access  Private
 */
export const changePassword = asyncHandler(
  async (req: ExtendedRequest, res, next) => {
    const currentPassword = req.body.currentPassword;
    const newPassword = req.body.newPassword;

    const currentUserId = req!.admin!.id;

    // Check required fields
    const requiredFields = { currentPassword, newPassword };
    const hasError = checkRequiredFields(requiredFields, next);
    if (hasError !== false) return hasError;

    // Check current password is correct
    const correctPassword = await comparePassword(
      currentPassword,
      req!.admin!.password
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

    await prisma.admin.update({
      where: { id: currentUserId },
      data: { password: hashedPassword },
    });

    res.status(200).json({
      success: true,
      message: "password has been updated",
    });
  }
);

/**
 * Update admin by current admin
 * @route   PUT /api/v1/admins
 * @access  Private
 */
export const updateAdminSelf = asyncHandler(
  async (req: ExtendedRequest, res, next) => {
    const username: string | undefined = req.body.username;
    let email: string | undefined = req.body.email;

    // Throws error if email is invalid
    if (email && !validateEmail(email)) {
      return next(new ErrorResponse(invalidEmail, 400));
    }

    const updatedAdmin = await prisma.admin.update({
      where: { id: req!.admin!.id },
      data: {
        username,
        email,
        updatedAt: new Date().toISOString(),
      },
      select: {
        username: true,
        email: true,
        updatedAt: true,
      },
    });

    res.status(200).json({
      success: true,
      data: updatedAdmin,
    });
  }
);

/**
 * Get all admins
 * @route   GET /api/v1/admins
 * @access  Private (superadmin)
 */
export const getAdmins = asyncHandler(async (req, res, next) => {
  const admins = await prisma.admin.findMany({
    select: {
      id: true,
      username: true,
      email: true,
      active: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  res.status(200).json({
    success: true,
    count: admins.length,
    data: admins,
  });
});

/**
 * Get specific admin
 * @route   GET /api/v1/admins/:id
 * @access  Private (superadmin)
 */
export const getAdmin = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id);

  const admin = await prisma.admin.findUnique({
    where: { id },
    select: {
      id: true,
      username: true,
      email: true,
      active: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  // Throws 404 error if admin not found
  if (!admin) return next(new ErrorResponse(resource404Error("admin"), 404));

  res.status(200).json({
    success: true,
    data: admin,
  });
});

/**
 * Update specific admin
 * @route   PUT /api/v1/admins/:id
 * @access  Private (superadmin)
 */
export const updateAdmin = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id);

  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;
  const active = req.body.active;
  let hashedPassword: string | undefined;

  // Check role if it is valid
  if (role !== undefined) {
    if (!checkRole(role)) return next(new ErrorResponse(roleError, 400));
  }

  // Hash plain text password
  if (password) {
    hashedPassword = await hashPassword(password);
  }

  const admin = await prisma.admin.update({
    where: { id },
    data: {
      username,
      email,
      password: hashedPassword,
      role,
      active,
      updatedAt: new Date().toISOString(),
    },
  });

  res.status(200).json({
    success: true,
    data: { ...admin, password },
  });
});

/**
 * Delete user by id
 * @route   DELETE /api/v1/admins/:id
 * @access  Private (superadmin)
 */
export const deleteAdmin = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id);

  await prisma.admin.delete({
    where: { id },
  });

  res.status(203).json({
    success: true,
  });
});

/**
 * Seed Data
 * @route   POST /api/v1/admins/seed
 * @access  Private (superadmin)
 */
export const seedData = asyncHandler(async (req, res, next) => {
  const password = req.body.password;

  if (password !== process.env.SEEDING_PASSWORD) {
    return next(new ErrorResponse(unauthorizedError, 403));
  }

  for (let customer of customers) {
    await prisma.customer.create({
      data: customer,
    });
  }

  for (let category of categories) {
    await prisma.category.create({
      data: category,
    });
  }

  for (let product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  for (let admin of admins) {
    await prisma.admin.create({
      data: admin,
    });
  }

  res.status(201).json({
    success: true,
    message: "Database seeding complete successfully",
  });
});
