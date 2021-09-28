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

export const page404Error = errorObj(404, "notFound", "Page Not Found");

export const resource404Error = errorObj(404, "notFound", "Resource Not Found");

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
