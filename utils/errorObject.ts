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
  unauthorized: "unauthorized",
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
 * Unauthorized Login Error
 * @description { 401, unauthorized, "email or password is incorrect" }
 */
export const unauthError = errorObj(
  401,
  errorTypes.unauthorized,
  "email or password is incorrect"
);

/**
 * Unauthorized Access Error
 * @description { 401, unauthorized, "not authorized to access this route" }
 */
export const unauthAccess = errorObj(
  401,
  errorTypes.unauthorized,
  "not authorized to access this route"
);

/**
 * 404 Page Not Found Error
 * @description { 404, notFound, "not authorized to access this route" }
 */
export const page404Error = errorObj(
  404,
  errorTypes.notFound,
  "page not found"
);

/**
 * 404 Resource Not Found Error
 * @description { 404, notFound, "resource not found" }
 */
export const resource404Error = errorObj(
  404,
  errorTypes.notFound,
  "resource not found"
);

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
