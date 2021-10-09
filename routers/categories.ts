import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../controllers/categories";

const router = Router();

router.get("/", getCategories).post("/", createCategory);

router
  .get("/:id", getCategory)
  .put("/:id", updateCategory)
  .delete("/:id", deleteCategory);

export default router;
