import { Router } from "express";
import {
  createProduct,
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

router.get("/:id", getProduct).put("/:id", updateProduct);

export default router;
