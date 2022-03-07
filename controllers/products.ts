import prisma from "../prisma/client";
import asyncHandler from "../middlewares/asyncHandler";
import {
  checkRequiredFields,
  filteredQty,
  isIntegerAndPositive,
  orderedQuery,
  ProductSelectType,
  selectAllProductField,
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

/**
 * Get all products
 * @route   GET /api/v1/products
 * @access  Public
 */
export const getProducts = asyncHandler(async (req, res, next) => {
  type FilteredType = { [key: string]: number };

  // requested queries
  const querySelect = req.query.select;
  const queryInclude = req.query.include;
  const queryOrderBy = req.query.order_by;
  const queryOffset = req.query.offset;
  const queryLimit = req.query.limit;
  const queryPrice = req.query.price;
  const queryStock = req.query.stock;
  const queryCategory = req.query.category;

  // init variables
  let select: Prisma.ProductSelect | ProductSelectType | undefined;
  let orderBy:
    | Prisma.Enumerable<Prisma.ProductOrderByWithRelationInput>
    | undefined;
  let skip: number | undefined;
  let take: number | undefined;
  let price: FilteredType[] = [];
  let stock: FilteredType[] = [];
  let categoryId: number | undefined;

  // return error if include field is not tags or category
  if (queryInclude) {
    const includedFields = (queryInclude as string).split(",");
    let error = false;
    includedFields.forEach((field) => {
      if (field !== "tags" && field !== "category") {
        error = true;
      }
    });

    if (error) {
      return next(
        new ErrorResponse(
          {
            status: 400,
            type: errorTypes.badRequest,
            message: "include field is not correct",
          },
          400
        )
      );
    }
  }

  // if select & !include
  if (querySelect && !queryInclude) {
    select = selectedQuery(querySelect as string);
  }
  // if select & include
  else if (querySelect && queryInclude) {
    const selectedFields = selectedQuery(querySelect as string);
    const includedFields = selectedQuery(queryInclude as string);
    select = {
      ...selectedFields,
      ...includedFields,
    };
  }
  // if include & !select
  else if (!querySelect && queryInclude) {
    const selectAll = selectAllProductField();
    const includedFields = selectedQuery(queryInclude as string);
    select = {
      ...selectAll,
      ...includedFields,
    };
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

  // if req products with certain category
  if (queryCategory) {
    const category = await prisma.category.findUnique({
      where: { name: queryCategory as string },
    });
    if (!category) {
      return next(new ErrorResponse(resource404Error("category"), 404));
    }
    categoryId = category.id;
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
      categoryId: {
        equals: categoryId,
      },
      // tags: {
      //   some: {
      //     name: { in: ["skirt"] },
      //   },
      // },
    },
    // include: {
    //   tags: true,
    // },

    // include: { category: true },
  });

  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
});

/**
 * Get product count
 * @route   GET /api/v1/products
 * @access  Public
 */
export const getProductCount = asyncHandler(async (req, res, next) => {
  // requested queries
  const queryCategory = req.query.category;

  let categoryId: number | undefined;
  if (queryCategory) {
    const category = await prisma.category.findUnique({
      where: { name: queryCategory as string },
    });
    if (!category) {
      return next(new ErrorResponse(resource404Error("category"), 404));
    }
    categoryId = category.id;
  }

  const products = await prisma.product.findMany({
    where: {
      categoryId: {
        equals: categoryId,
      },
    },
  });

  res.status(200).json({
    success: true,
    count: products.length,
  });
});

/**
 * Search products
 * @route   GET /api/v1/products/search
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
 * @route   GET /api/v1/products/:id
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
 * @route   POST /api/v1/products
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
  if (stock) {
    if (stock && !isIntegerAndPositive(stock)) {
      return next(new ErrorResponse(invalidStockError, 400));
    }
    stock = parseInt(stock);
  }

  // Throws error if categoryId is invalid
  if (categoryId) {
    const category = await prisma.category.findUnique({
      where: { id: parseInt(categoryId) },
    });
    if (!category) {
      return next(new ErrorResponse(invalidCategoryError(categoryId), 400));
    }
    categoryId = parseInt(categoryId);
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
        connect: { id: categoryId },
      },
      image1,
      image2,
      stock,
      // tags: {
      //   create: [{ name: "trendy" }],
      // },
      // categories: {
      //   create: [{ name: 'Magic' }, { name: 'Butterflies' }],
      // },
    },
  });

  res.status(201).json({
    success: true,
    data: product,
  });
});

/**
 * Update a product
 * @route   PUT /api/v1/products/:id
 * @access  Private
 */
export const updateProduct = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id);

  let {
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
  if (price) {
    if (!parseFloat(price) || parseFloat(price) < 0) {
      return next(new ErrorResponse(invalidPriceError, 400));
    }
    price = parseFloat(price);
  }

  // Throws error if stock field is not integer
  if (stock) {
    if (!isIntegerAndPositive(stock)) {
      return next(new ErrorResponse(invalidStockError, 400));
    }
    stock = parseInt(stock);
  }

  // Throws error if categoryId is invalid
  if (categoryId) {
    const category = await prisma.category.findUnique({
      where: { id: parseInt(categoryId) },
    });
    if (!category) {
      return next(new ErrorResponse(invalidCategoryError(categoryId), 400));
    }
    categoryId = parseInt(categoryId);
  }

  if (discountPercent) {
    discountPercent = parseFloat(discountPercent);
  }

  const existingProduct = await prisma.product.findUnique({
    where: { id },
  });

  const product = await prisma.product.update({
    where: { id },
    data: {
      name: name ? name : existingProduct?.name,
      price: price ? price : existingProduct?.price,
      discountPercent: discountPercent
        ? discountPercent
        : existingProduct?.discountPercent,
      description: description ? description : existingProduct?.description,
      detail: detail ? detail : existingProduct?.detail,
      category: {
        connect: {
          id: categoryId ? categoryId : existingProduct?.categoryId,
        },
      },
      image1: image1 ? image1 : existingProduct?.image1,
      image2: image2 ? image2 : existingProduct?.image2,
      stock: stock ? stock : existingProduct?.stock,
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
 * @route   DELETE /api/v1/products/:id
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
