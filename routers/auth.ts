import { Router } from "express";
import { loginCustomer, registerCustomer } from "../controllers/auth";
import { protect } from "../middlewares/authHandler";

const router = Router();

router
  .get("/getMe", protect, (req, res) => res.json({ msg: "Hello World" }))
  .post("/register", registerCustomer)
  .post("/login", loginCustomer);

export default router;
