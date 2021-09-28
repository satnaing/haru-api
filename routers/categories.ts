import { Router } from "express";
import { getCategories, getCategory } from "../controllers/categories";

const router = Router();

router.get("/", getCategories);

router.get("/:id", getCategory);

export default router;
