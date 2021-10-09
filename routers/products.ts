import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  searchProducts,
  updateProduct,
} from "../controllers/products";
import { adminOnly } from "../middlewares/authHandler";

const router = Router();

router
  .get("/", getProducts)
  .get("/search", searchProducts)
  .post("/", adminOnly, createProduct);

router
  .get("/:id", getProduct)
  .put("/:id", adminOnly, updateProduct)
  .delete("/:id", adminOnly, deleteProduct);

export default router;
