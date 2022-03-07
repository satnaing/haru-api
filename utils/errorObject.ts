export type errObjType = {
  status: number;
  type: string;
  message: string;
  detail?: any[];
};

export const errorTypes = {
  notFound: "notFound",
  badRequest: "badRequest",
  internalError: "internalError",
  alreadyExists: "alreadyExists",
  missingField: "missingField",
  invalidQuery: "invalidQuery",
  invalidArgument: "invalidArgument",
  invalidToken: "invalidToken",
  expireToken: "expireToken",
  unauthorized: "unauthorized",
  forbidden: "forbidden",
};

const errorObj = (
  status: number,
  type: string,
  message: string,
  detail?: ErrorDetailType[]
) => ({
  status,
  type,
  message,
  detail,
});

/**
 * Internal Server Error
 * @description { 500, internalError, "internal server error" }
 */
export const defaultError = errorObj(
  500,
  errorTypes.internalError,
  "internal server error"
);

/**
 * Invalid Email Error
 * @description { 400, invalidArgument, "email is not valid" }
 */
export const invalidEmail = errorObj(
  400,
  errorTypes.invalidArgument,
  "email is not valid"
);

/**
 * Unauthorized Error
 * @description { 403, forbidden, "not authorized" } *
 */
export const unauthorizedError = errorObj(
  403,
  errorTypes.forbidden,
  "not authorized"
);

/**
 * Incorrect Credentials Error
 * @description { 401, unauthorized, "email or password is incorrect" }
 */
export const incorrectCredentialsError = {
  status: 401,
  type: errorTypes.unauthorized,
  message: "email or password is incorrect",
};

/**
 * Role Error
 * @description { 400, invalidArgument, "role type is not valid" }
 */
export const roleError = errorObj(
  400,
  errorTypes.invalidArgument,
  "role type is not valid",
  [
    {
      code: "invalidRole",
      message: "role must be one of 'SUPERADMIN', 'ADMIN', and 'MODERATOR'",
    },
  ]
);

/**
 * Payment Type Error
 * @description { 400, invalidArgument, "payment type is not valid" }
 */
export const paymentTypeError = errorObj(
  400,
  errorTypes.invalidArgument,
  "payment type is not valid",
  [
    {
      code: "invalidPaymentType",
      message:
        "payment type must be one of 'CASH_ON_DELIVERY', 'BANK_TRANSFER'",
    },
  ]
);

/**
 * Delivery Type Error
 * @description { 400, invalidArgument, "delivery type is not valid" }
 */
export const deliveryTypeError = errorObj(
  400,
  errorTypes.invalidArgument,
  "delivery type is not valid",
  [
    {
      code: "invalidDeliveryType",
      message:
        "delivery type must be one of 'STORE_PICKUP', 'YANGON', or 'OTHERS'",
    },
  ]
);

/**
 * Auth Required Error
 * @description { 401, unauthorized, "authentication required" }
 */
//  unauthAccess
export const authRequiredError = errorObj(
  401,
  errorTypes.unauthorized,
  "authentication required"
);

/**
 * 404 Resource Not Found Error
 * @param resource - resource to return as message
 * @return errorObj - { 404, notFound, "${resource} not found" }
 */
export const resource404Error = (resource: string = "resource") =>
  errorObj(404, errorTypes.notFound, `${resource} not found`);

/**
 * ID Not Specified Error
 * @description { 400, badRequest, "id not specified in the request" }
 */
export const idNotSpecifiedError = errorObj(
  400,
  errorTypes.badRequest,
  "id not specified in the request"
);

/**
 * Invalid Query Error
 * @description { 400, invalidQuery, "one or more url query is invalid" }
 */
export const invalidQuery = errorObj(
  400,
  errorTypes.invalidQuery,
  "one or more url query is invalid"
);

export type ErrorDetailType = {
  code: string;
  message: string;
};

/**
 * Invalid Argument Detail Error
 * @return Object - { code: "missingSomething", message: "some field is missing"}
 */
export const invalidArgDetail = (str: string) => {
  return {
    code: `missing${str.charAt(0).toUpperCase()}${str.slice(1)}`,
    message: `${str} field is missing`,
  };
};

/**
 * Invalid Argument Error
 * @return Object - { 400, invalidArgument, "invalid one or more argument(s)"}
 */
export const invalidArgError = (detail: ErrorDetailType[]) =>
  errorObj(
    400,
    errorTypes.invalidArgument,
    "invalid one or more argument(s)",
    detail
  );

export const missingField = (field: string) =>
  errorObj(400, errorTypes.missingField, `${field} field is missing`);

/**
 * Invalid Token Error
 * @return Object - {400, invalidToken, "token is invalid"}
 */
export const invalidTokenError = errorObj(
  400,
  errorTypes.invalidToken,
  "token is invalid"
);

/**
 * Expire Token Error
 * @return Object - {400, invalidToken, "token is invalid"}
 */
export const expireTokenError = errorObj(
  400,
  errorTypes.expireToken,
  "token is expired"
);

export default errorObj;

// {
//   "status": 500,
//   "type": "internalError",
//   "message": "Internal Server Error"
//   "detail": []
// }

// {
//   status: 404,
//   type: "notFound",
//   message: "Page Not Found",
//   detail: []
// }

// "error": {
//   "status": 400,
//   "type": "invalidArgument",
//   "message": "invalid category id"
// }

// "error": {
//   "status": 400,
//   "type": "invalidArgument",
//   "message": "invalid one or more argument(s)",
//   "detail": [
//       {
//           "code": "missingName",
//           "message": "name field is missing"
//       },
//       {
//           "code": "missingPrice",
//           "message": "price field is missing"
//       },
//       {
//           "code": "missingDescription",
//           "message": "description field is missing"
//       },
//       {
//           "code": "missingImage1",
//           "message": "image1 field is missing"
//       },
//       {
//           "code": "missingImage2",
//           "message": "image2 field is missing"
//       }
//   ]
// }
