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

// {
//   "success": false,
//   "error": {
//     "status": 400,
//     "type": "invalidArgument",
//     "message": "invalid argument",
//     "detail": [
//       {
//         "code": "missingName",
//         "message": "name field is missing"
//       }
//     ]
//   }
// }

export type ErrorDetailType = {
  code: string;
  message: string;
};

export const invalidArgDetail = (str: string) => {
  return {
    code: `missing${str.charAt(0).toUpperCase()}${str.slice(1)}`,
    message: `${str} field is missing`,
  };
};

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
