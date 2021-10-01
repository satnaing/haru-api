import prisma from "../prisma/client";
import asyncHandler from "../middlewares/asyncHandler";
import { orderedQuery, selectedQuery } from "../utils/queryFilters";
import { Prisma } from ".prisma/client";

// @desc    Get all products
// @route   GET /api/v1/categories
// @access  Public
export const getProducts = asyncHandler(async (req, res, next) => {
  const querySelect = req.query.select;
  const queryOrderBy = req.query.order_by;
  const queryOffset = req.query.offset;
  const queryLimit = req.query.limit;

  let select: Prisma.ProductSelect | undefined;
  let orderBy:
    | Prisma.Enumerable<Prisma.ProductOrderByWithRelationInput>
    | undefined;
  let skip: number | undefined;
  let take: number | undefined;

  if (querySelect) {
    select = selectedQuery(querySelect as string);
  }

  if (queryOrderBy) {
    orderBy = orderedQuery(queryOrderBy as string);
  }

  if (queryOffset) {
    skip = parseInt(queryOffset as string);
  }

  if (queryLimit) {
    take = parseInt(queryLimit as string);
  }

  const products = await prisma.product.findMany({
    select,
    orderBy,
    skip,
    take,
    // include: { category: true },
  });

  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
});
