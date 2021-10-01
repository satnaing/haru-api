import prisma from "../prisma/client";
import asyncHandler from "../middlewares/asyncHandler";
import { orderedQuery, selectedQuery } from "../utils/queryFilters";
import { Prisma } from ".prisma/client";

// @desc    Get all products
// @route   GET /api/v1/categories
// @access  Public
export const getProducts = asyncHandler(async (req, res, next) => {
  let querySelect = req.query.select;
  let queryOrderBy = req.query.order_by;
  let select: Prisma.ProductSelect | undefined;
  let orderBy:
    | Prisma.Enumerable<Prisma.ProductOrderByWithRelationInput>
    | undefined;

  if (querySelect) {
    select = selectedQuery(querySelect as string);
  }

  if (queryOrderBy) {
    orderBy = orderedQuery(queryOrderBy as string);
  }

  const products = await prisma.product.findMany({
    select,
    orderBy,
    // include: { category: true },
  });

  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
});
