import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
} from "../controllers/categories";

const router = Router();

router.get("/", getCategories).post("/", createCategory);

router.get("/:id", getCategory).delete("/:id", deleteCategory);

export default router;
