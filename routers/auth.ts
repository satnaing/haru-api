import { Router } from "express";
import { getMe, loginCustomer, registerCustomer } from "../controllers/auth";
import { protect } from "../middlewares/authHandler";

const router = Router();

router
  .get("/me", protect, getMe)
  .post("/register", registerCustomer)
  .post("/login", loginCustomer);

export default router;
