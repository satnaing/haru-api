import prisma from "../prisma/client";
import asyncHandler from "../middlewares/asyncHandler";

// @desc    Get all categories
// @route   GET /api/v1/categories
// @access  Public
export const getCategories = asyncHandler(async (req, res, next) => {
  const categories = await prisma.category.findMany();

  res.status(200).json({ success: true, data: categories });
});
