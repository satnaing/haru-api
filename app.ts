import express from "express";
import morgan from "morgan";
import errorHandler from "./middlewares/errorHandler";

// import routes
import categories from "./routers/categories";
import products from "./routers/products";
import customers from "./routers/customers";

const app = express();

process.env.NODE_ENV === "development" && app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/categories", categories);
app.use("/api/v1/products", products);
app.use("/api/v1/customers", customers);

app.use(errorHandler);

export default app;
