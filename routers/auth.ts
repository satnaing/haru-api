import { Router } from "express";
import {
  changePassword,
  forgotPassword,
  getMe,
  loginCustomer,
  registerCustomer,
  resetPassword,
  updateCustomerSelf,
} from "../controllers/auth";
import { protect } from "../middlewares/authHandler";

const router = Router();

router
  .get("/me", protect, getMe)
  .post("/register", registerCustomer)
  .post("/login", loginCustomer)
  .put("/update-details", protect, updateCustomerSelf)
  .put("/change-password", protect, changePassword)
  .post("/forgot-password", forgotPassword)
  .put("/reset-password/:resetToken", resetPassword);

export default router;
