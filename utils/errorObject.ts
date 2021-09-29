export type errObjType = {
  status: number;
  type: string;
  message: string;
  detail?: any[];
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
  "internalError",
  "Internal Server Error"
);

export const page404Error = errorObj(404, "notFound", "page not found");

export const resource404Error = errorObj(404, "notFound", "resource not found");

export const idNotSpecifiedError = errorObj(
  400,
  "badRequest",
  "id not specified in the request"
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
