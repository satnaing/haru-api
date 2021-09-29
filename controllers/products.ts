import prisma from "../prisma/client";
import asyncHandler from "../middlewares/asyncHandler";

// @desc    Get all products
// @route   GET /api/v1/categories
// @access  Public
export const getProducts = asyncHandler(async (req, res, next) => {
  const products = await prisma.product.findMany({
    // include: { category: true },
  });

  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
});
