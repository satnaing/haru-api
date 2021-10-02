import { Router } from "express";
import { getProducts, searchProducts } from "../controllers/products";

const router = Router();

router.get("/", getProducts);

router.get("/search", searchProducts);

export default router;
