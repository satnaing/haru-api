import prisma from "../prisma/client";
import asyncHandler from "../middlewares/asyncHandler";
import ErrorResponse from "../utils/errorResponse";
import { resource404Error } from "../utils/errorObject";
import { orderQuery, selectQuery } from "../utils/queryFilters";

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
  let select = undefined;
  let orderBy: OrderType[] = [];

  // If select is sent along with request
  if (querySelect) {
    select = selectQuery(querySelect as string);
  }

  // If order_by is sent along with request
  if (queryOrder) {
    orderBy = orderQuery(queryOrder as string, orderBy);
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

  const category = await prisma.category.findUnique({
    where: { id },
  });

  if (!category) {
    return next(new ErrorResponse(resource404Error, 404));
  }

  res.status(200).json({
    success: true,
    data: category,
  });
});
