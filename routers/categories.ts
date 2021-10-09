import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../controllers/categories";
import { adminOnly } from "../middlewares/authHandler";

const router = Router();

router.route("/").get(getCategories).post(adminOnly, createCategory);

router
  .route("/:id")
  .get(getCategory)
  .put(adminOnly, updateCategory)
  .delete(adminOnly, deleteCategory);

export default router;
