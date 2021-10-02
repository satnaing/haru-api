import prisma from "../prisma/client";
import asyncHandler from "../middlewares/asyncHandler";
import {
  filteredQty,
  orderedQuery,
  selectedQuery,
} from "../utils/queryFilters";
import { Prisma } from ".prisma/client";
import ErrorResponse from "../utils/errorResponse";
import { errObjType, errorTypes } from "../utils/errorObject";

// @desc    Get all products
// @route   GET /api/v1/categories
// @access  Public
export const getProducts = asyncHandler(async (req, res, next) => {
  type FilteredType = { [key: string]: number };

  const querySelect = req.query.select;
  const queryOrderBy = req.query.order_by;
  const queryOffset = req.query.offset;
  const queryLimit = req.query.limit;
  const queryPrice = req.query.price;
  const queryStock = req.query.stock;

  let select: Prisma.ProductSelect | undefined;
  let orderBy:
    | Prisma.Enumerable<Prisma.ProductOrderByWithRelationInput>
    | undefined;
  let skip: number | undefined;
  let take: number | undefined;
  let price: FilteredType[] = [];
  let stock: FilteredType[] = [];

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

  const errObj: errObjType = {
    status: 400,
    type: errorTypes.badRequest,
    message: "same parameter cannot be more than 2",
  };

  if (queryPrice) {
    if (typeof queryPrice !== "string" && (queryPrice as string[]).length > 2) {
      return next(new ErrorResponse(errObj, 400));
    }
    price = filteredQty(queryPrice as string | string[]);
  }

  if (queryStock) {
    if (typeof queryStock !== "string" && (queryStock as string[]).length > 2) {
      return next(new ErrorResponse(errObj, 400));
    }
    stock = filteredQty(queryStock as string | string[]);
  }

  const products = await prisma.product.findMany({
    select,
    orderBy,
    skip,
    take,
    where: {
      AND: [
        {
          AND: [
            {
              price: price[0],
            },
            {
              price: price[1],
            },
          ],
        },
        {
          AND: [
            {
              stock: stock[0],
            },
            {
              stock: stock[1],
            },
          ],
        },
      ],
    },

    // include: { category: true },
  });

  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
});
