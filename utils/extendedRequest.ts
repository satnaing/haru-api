import { Customer } from ".prisma/client";
import { Request } from "express";
export interface ExtendedRequest extends Request {
  user?: Customer | null; // or any other type
}
