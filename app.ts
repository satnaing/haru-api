import express from "express";
import morgan from "morgan";
import errorHandler from "./middlewares/errorHandler";

// import routes
import categories from "./routers/categories";
import products from "./routers/products";
import customers from "./routers/customers";
import admins from "./routers/admins";
import auth from "./routers/auth";
import ErrorResponse from "./utils/errorResponse";
import { resource404Error } from "./utils/errorObject";

const app = express();

process.env.NODE_ENV === "development" && app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/categories", categories);
app.use("/api/v1/products", products);
app.use("/api/v1/customers", customers);
app.use("/api/v1/auth", auth);
app.use("/api/v1/admins", admins);

// 404 error if route not found
app.all("*", (req, res, next) =>
  next(new ErrorResponse(resource404Error("route"), 404))
);

app.use(errorHandler);

export default app;
