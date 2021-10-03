import { NextFunction } from "express";
import {
  invalidArgDetail,
  invalidArgError,
  ErrorDetailType,
} from "./errorObject";
import ErrorResponse from "./errorResponse";

type OrderType = { [key: string]: string };
type FilteredType = { [key: string]: number };

export const selectedQuery = (query: string) =>
  query.split(",").reduce((a, v) => ({ ...a, [v.trim()]: true }), {});

export const orderedQuery = (query: string) => {
  let orderArray: OrderType[] = [];
  const sortLists = query.split(",");
  sortLists.forEach((sl) => {
    const obj: OrderType = {};

    const fields = sl.split(".");
    obj[fields[0]] = fields[1] || "asc";
    orderArray = [...orderArray, obj];
  });
  return orderArray;
};

export const filteredQty = (query: string | string[]) => {
  const obj: FilteredType = {};
  const obj2: FilteredType = {};
  let filteredValue: FilteredType[] = [];
  if (typeof query === "string") {
    const fields = query.split(":");
    obj[fields[0]] = parseFloat(fields[1]);
    filteredValue = [...filteredValue, obj];
  }
  if (typeof query === "object") {
    const fields = (query as string[])[0].split(":");
    obj[fields[0]] = parseFloat(fields[1]);
    filteredValue = [...filteredValue, obj];

    const fields2 = (query as string[])[1].split(":");
    obj2[fields2[0]] = parseFloat(fields2[1]);
    filteredValue = [...filteredValue, obj2];
  }
  return filteredValue;
};

export const checkRequiredFields = (
  requiredObj: { [key: string]: string | undefined },
  next: NextFunction
) => {
  let errorArray: ErrorDetailType[] = [];
  for (const field in requiredObj) {
    if (!requiredObj[field]) {
      errorArray = [...errorArray, invalidArgDetail(field)];
    }
  }
  if (errorArray.length === 0) {
    return false;
  } else {
    return next(new ErrorResponse(invalidArgError(errorArray), 400));
  }
};
