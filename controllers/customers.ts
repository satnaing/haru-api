import asyncHandler from "../middlewares/asyncHandler";
import prisma from "../prisma/client";
import { resource404Error } from "../utils/errorObject";
import ErrorResponse from "../utils/errorResponse";

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

// @desc    Get Specific Customer
// @route   GET /api/v1/customers/:id
// @access  Private
export const getCustomer = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id);

  const customer = await prisma.customer.findUnique({
    where: { id },
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

  if (!customer) {
    return next(new ErrorResponse(resource404Error, 404));
  }

  res.status(200).json({
    success: true,
    data: customer,
  });
});

// @desc    Delete Customer
// @route   DEETE /api/v1/customers
// @access  Private
export const deleteCustomer = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id);

  const customer = await prisma.customer.delete({
    where: { id },
  });

  if (!customer) {
    return next(new ErrorResponse(resource404Error, 404));
  }

  res.status(204).json({
    success: true,
    data: [],
  });
});
