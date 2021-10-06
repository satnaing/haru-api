import Router from "express";
import { createAdmin, getMe, loginAdmin } from "../controllers/admins";
import { protect } from "../middlewares/authHandler";

const router = Router();

router.get("/me", protect, getMe).post("/", createAdmin);

router.post("/login", loginAdmin);

export default router;
