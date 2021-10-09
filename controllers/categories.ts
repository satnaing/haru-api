import prisma from "../prisma/client";
import asyncHandler from "../middlewares/asyncHandler";
import ErrorResponse from "../utils/errorResponse";
import { errorTypes, resource404Error } from "../utils/errorObject";
import {
  checkRequiredFields,
  orderedQuery,
  selectedQuery,
} from "../utils/helperFunctions";
import { Prisma } from ".prisma/client";

/**
 * Get all categories
 * @route   GET /api/v1/categories
 * @access  Public
 */
export const getCategories = asyncHandler(async (req, res, next) => {
  // Type Declaration
  type OrderType = { [key: string]: string };

  // Request Queries
  const querySelect = req.query.select;
  const queryOrder = req.query.order_by;

  // Filter and Sorting initial values
  let select: Prisma.CategorySelect | undefined = undefined;
  let orderBy: OrderType[] = [];

  // If select is sent along with request
  if (querySelect) {
    select = selectedQuery(querySelect as string);
  }

  // If order_by is sent along with request
  if (queryOrder) {
    orderBy = orderedQuery(queryOrder as string);
  }

  // Find categories with Prisma Client
  const categories = await prisma.category.findMany({
    select,
    orderBy,
  });

  res
    .status(200)
    .json({ success: true, count: categories.length, data: categories });
});

/**
 * Get specific category
 * @route   GET /api/v1/categories/:id
 * @access  Public
 */
export const getCategory = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id);
  const querySelect = req.query.select;
  let select: Prisma.CategorySelect | undefined;

  // If select specific fields, response only selected query
  if (querySelect) {
    select = selectedQuery(querySelect as string);
  }

  const category = await prisma.category.findUnique({
    where: { id },
    select,
  });

  // Throws an error if category does not exists
  if (!category) {
    return next(new ErrorResponse(resource404Error("category"), 404));
  }

  res.status(200).json({
    success: true,
    data: category,
  });
});

/**
 * Create a new category
 * @route   POST /api/v1/categories
 * @access  Private (admin)
 */
export const createCategory = asyncHandler(async (req, res, next) => {
  const queryName: string | undefined = req.body.name;
  const id: number | undefined = parseInt(req.body.id) || undefined;
  const description: string | undefined = req.body.description;
  const thumbnailImage: string | undefined = req.body.thumbnailImage;
  let name: string | undefined;

  // Throws an error if name field is not specified
  const hasError = checkRequiredFields({ name: queryName }, next);
  if (hasError !== false) return hasError;

  // Trim the name and change it to lower-case
  name = (queryName as string).trim().toLowerCase();

  // Create a category in prisma client
  const category = await prisma.category.create({
    data: {
      id: id as number,
      name: name as string,
      description,
      thumbnailImage,
    },
  });

  res.status(201).json({
    success: true,
    location: `${req.protocol}://${req.get("host")}${req.baseUrl}/${
      category.id
    }`,
    data: category,
  });
});

/**
 * Delete a category
 * @route   DELETE /api/v1/categories/:id
 * @access  Private (admin)
 */
export const deleteCategory = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id);

  await prisma.category.delete({
    where: { id },
  });

  res.status(204).json({
    success: true,
    data: [],
  });
});

/**
 * Update category
 * @route   PUT /api/v1/categories/:id
 * @access  Private
 */
export const updateCategory = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id);
  const name: string | undefined = req.body.name;
  const description: string | undefined = req.body.description;
  const thumbnailImage: string | undefined = req.body.thumbnailImage;

  const category = await prisma.category.update({
    where: { id },
    data: {
      name,
      description,
      thumbnailImage,
      updatedAt: new Date().toISOString(),
    },
  });

  res.status(200).json({
    success: true,
    data: category,
  });
});
