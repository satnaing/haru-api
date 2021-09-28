import prisma from "../prisma/client";
import asyncHandler from "../middlewares/asyncHandler";
import ErrorResponse from "../utils/errorResponse";
import { resource404Error } from "../utils/errorObject";
import { orderedQuery, selectedQuery } from "../utils/queryFilters";
import { Prisma } from ".prisma/client";

// @desc    Get all categories
// @route   GET /api/v1/categories
// @access  Public
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
    orderBy = orderedQuery(queryOrder as string, orderBy);
  }

  // Find categories with Prisma Client
  const categories = await prisma.category.findMany({
    select,
    orderBy,
  });

  res.status(200).json({ success: true, data: categories });
});

// @desc    Get specific category
// @route   GET /api/v1/categories/:id
// @access  Public
export const getCategory = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id);

  const querySelect = req.query.select;
  let select: Prisma.CategorySelect | undefined = undefined;

  if (querySelect) {
    select = selectedQuery(querySelect as string);
  }

  const category = await prisma.category.findUnique({
    where: { id },
    select,
  });

  if (!category) {
    return next(new ErrorResponse(resource404Error, 404));
  }

  res.status(200).json({
    success: true,
    data: category,
  });
});
