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
  missingCategoryName: "missingCategoryName",
  invalidQuery: "invalidQuery",
};

const errorObj = (
  status: number,
  type: string,
  message: string,
  detail?: any[]
) => ({
  status,
  type,
  message,
  detail,
});

export const defaultError = errorObj(
  500,
  errorTypes.internalError,
  "Internal Server Error"
);

export const page404Error = errorObj(
  404,
  errorTypes.notFound,
  "page not found"
);

export const resource404Error = errorObj(
  404,
  errorTypes.notFound,
  "resource not found"
);

export const idNotSpecifiedError = errorObj(
  400,
  errorTypes.badRequest,
  "id not specified in the request"
);

export const invalidQuery = errorObj(
  400,
  errorTypes.invalidQuery,
  "one or more url query is invalid"
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
