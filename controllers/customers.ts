import asyncHandler from "../middlewares/asyncHandler";
import prisma from "../prisma/client";

// @desc    Get All Customers
// @route   GET /api/v1/customers
// @access  Private
export const getCustomers = asyncHandler(async (req, res, next) => {
  const customers = await prisma.customer.findMany({
    // prisma desn't provide exclude yet, thus I have to
    // specify these fields to exclude some fields like password. sucks!
    select: {
      id: true,
      fullname: true,
      email: true,
      shippingAddress: true,
      phone: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  res.status(200).json({
    success: true,
    count: customers.length,
    data: customers,
  });
});
