import express from "express";
import morgan from "morgan";

// import routes
import categories from "./routers/categories";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/categories", categories);

export default app;
