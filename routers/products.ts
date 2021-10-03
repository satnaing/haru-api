import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  searchProducts,
  updateProduct,
} from "../controllers/products";

const router = Router();

router
  .get("/", getProducts)
  .get("/search", searchProducts)
  .post("/", createProduct);

router
  .get("/:id", getProduct)
  .put("/:id", updateProduct)
  .delete("/:id", deleteProduct);

export default router;
