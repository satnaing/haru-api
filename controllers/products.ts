import prisma from "../prisma/client";
import asyncHandler from "../middlewares/asyncHandler";
import {
  checkRequiredFields,
  filteredQty,
  isIntegerAndPositive,
  orderedQuery,
  selectedQuery,
} from "../utils/helperFunctions";
import { Prisma } from ".prisma/client";
import ErrorResponse from "../utils/errorResponse";
import errorObj, {
  errObjType,
  errorTypes,
  invalidQuery,
  resource404Error,
} from "../utils/errorObject";
import { NextFunction } from "express";

/**
 * Get all products
 * @route   GET /api/v1/categories
 * @access  Public
 */
export const getProducts = asyncHandler(async (req, res, next) => {
  type FilteredType = { [key: string]: number };

  // requested queries
  const querySelect = req.query.select;
  const queryOrderBy = req.query.order_by;
  const queryOffset = req.query.offset;
  const queryLimit = req.query.limit;
  const queryPrice = req.query.price;
  const queryStock = req.query.stock;

  // init variables
  let select: Prisma.ProductSelect | undefined;
  let orderBy:
    | Prisma.Enumerable<Prisma.ProductOrderByWithRelationInput>
    | undefined;
  let skip: number | undefined;
  let take: number | undefined;
  let price: FilteredType[] = [];
  let stock: FilteredType[] = [];

  // if select param is requested
  if (querySelect) {
    select = selectedQuery(querySelect as string);
  }

  // if order_by param is requested
  if (queryOrderBy) {
    orderBy = orderedQuery(queryOrderBy as string);
  }

  // if offset param is requested
  if (queryOffset) {
    skip = parseInt(queryOffset as string);
  }

  // if limit param is requested
  if (queryLimit) {
    take = parseInt(queryLimit as string);
  }

  // error obj for price and stock
  const errObj: errObjType = {
    status: 400,
    type: errorTypes.badRequest,
    message: "same parameter cannot be more than twice",
  };

  // if price param is requested
  if (queryPrice) {
    if (typeof queryPrice !== "string" && (queryPrice as string[]).length > 2) {
      return next(new ErrorResponse(errObj, 400));
    }
    price = filteredQty(queryPrice as string | string[]);
  }

  // if stock param is requested
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

/**
 * Search products
 * @route   GET /api/v1/categories/search
 * @access  Public
 */
export const searchProducts = asyncHandler(async (req, res, next) => {
  const querySearch = req.query.q;

  let search: string | undefined;
  let searchObj: string | Prisma.StringFilter | undefined;

  if (querySearch) {
    search = (querySearch as string).replace(" ", "|");
    searchObj = { search: search, mode: "insensitive" };
  }

  const products = await prisma.product.findMany({
    where: {
      name: searchObj,
      description: searchObj,
      detail: searchObj,
    },
  });

  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
});

/**
 * Get specific products
 * @route   GET /api/v1/categories/:id
 * @access  Public
 */
export const getProduct = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id);
  const queryInclude = req.query.include;
  let include: Object | undefined;

  if (queryInclude === "category") {
    include = { category: true };
  }

  // return error if include is specified and
  // include value is not "category"
  if (queryInclude && queryInclude !== "category") {
    return next(new ErrorResponse(invalidQuery, 400));
  }

  const product = await prisma.product.findUnique({
    where: { id },
    include,
  });

  // throws error if no product with that id found
  if (!product) {
    return next(new ErrorResponse(resource404Error("product"), 404));
  }

  res.status(200).json({
    success: true,
    data: product,
  });
});

/**
 * Create new product
 * @route   POST /api/v1/categories
 * @access  Private
 */
export const createProduct = asyncHandler(async (req, res, next) => {
  type RequiredFieldsType = {
    name: string | undefined;
    price: string | undefined;
    description: string | undefined;
    image1: string | undefined;
    image2: string | undefined;
  };

  let {
    name,
    price,
    description,
    image1,
    image2,
    discountPercent,
    detail,
    categoryId,
    stock,
  } = req.body;

  const requiredFields: RequiredFieldsType = {
    name,
    price,
    description,
    image1,
    image2,
  };

  // Throws error if required field is not specified
  const hasError = checkRequiredFields(requiredFields, next);
  if (hasError !== false) return hasError;

  // Throws error if price field is not number or negative number
  if (!parseFloat(price) || parseFloat(price) < 0) {
    return next(new ErrorResponse(invalidPriceError, 400));
  }

  // Throws error if stock field is not integer
  if (stock && !isIntegerAndPositive(stock)) {
    return next(new ErrorResponse(invalidStockError, 400));
  }

  // Throws error if categoryId is invalid
  if (categoryId) {
    const category = await prisma.category.findUnique({
      where: { id: parseInt(categoryId) },
    });
    if (!category) {
      return next(new ErrorResponse(invalidCategoryError(categoryId), 400));
    }
  }

  // let id: any;
  // if (process.env.NODE_ENV === "testing") {
  //   id = parseInt(req.body.id);
  // }

  const product = await prisma.product.create({
    data: {
      // id, // only for testing
      name,
      price,
      discountPercent,
      description,
      detail,
      category: {
        connect: { id: parseInt(categoryId) },
      },
      image1,
      image2,
      stock: parseInt(stock),
    },
  });

  res.status(201).json({
    success: true,
    data: product,
  });
});

/**
 * Update a product
 * @route   PUT /api/v1/categories/:id
 * @access  Private
 */
export const updateProduct = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id);

  const {
    name,
    price,
    discountPercent,
    description,
    detail,
    categoryId,
    image1,
    image2,
    stock,
  } = req.body;

  // Throws error if price field is not number
  if (!parseFloat(price) || parseFloat(price) < 0) {
    return next(new ErrorResponse(invalidPriceError, 400));
  }

  // Throws error if stock field is not integer
  if (stock && !isIntegerAndPositive(stock)) {
    return next(new ErrorResponse(invalidStockError, 400));
  }

  // Throws error if categoryId is invalid
  if (categoryId) {
    const category = await prisma.category.findUnique({
      where: { id: parseInt(categoryId) },
    });
    if (!category) {
      return next(new ErrorResponse(invalidCategoryError(categoryId), 400));
    }
  }

  const product = await prisma.product.update({
    where: { id },
    data: {
      name,
      price,
      discountPercent: parseFloat(discountPercent),
      description,
      detail,
      category: {
        connect: {
          id: parseInt(categoryId),
        },
      },
      image1,
      image2,
      stock: parseInt(stock),
      updatedAt: new Date().toISOString(),
    },
  });

  res.status(200).json({
    success: true,
    data: product,
  });
});

/**
 * Delete a product
 * @route   DELETE /api/v1/categories:id
 * @access  Private
 */
export const deleteProduct = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id);

  await prisma.product.delete({
    where: { id },
  });

  res.status(204).json({
    success: true,
    data: [],
  });
});

/*========================= Errors =============================*/
const invalidPriceError = errorObj(
  400,
  errorTypes.invalidArgument,
  "invalid price field",
  [
    {
      code: "invalidPrice",
      message: `price field must only be valid number`,
    },
  ]
);

const invalidStockError = errorObj(
  400,
  errorTypes.invalidArgument,
  "invalid stock field",
  [
    {
      code: "invalidStock",
      message: `stock field must only be valid integer`,
    },
  ]
);

const invalidCategoryError = (categoryId: string) =>
  errorObj(400, errorTypes.invalidArgument, "invalid category id", [
    {
      code: "invalidCategory",
      message: `there is no category with id ${categoryId}`,
    },
  ]);
