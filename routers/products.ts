import { Router } from "express";
import {
  getProduct,
  getProducts,
  searchProducts,
} from "../controllers/products";

const router = Router();

router.get("/", getProducts).get("/search", searchProducts);

router.get("/:id", getProduct);

export default router;
