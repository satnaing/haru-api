import { errObjType } from "./errorObject";

class ErrorResponse extends Error {
  public errObj: errObjType;
  public statusCode: number;
  constructor(errObj: errObjType, statusCode: number) {
    // super(errObj);
    super();
    this.errObj = errObj;
    this.statusCode = statusCode;
  }
}

export default ErrorResponse;
