import { Router } from "express";
import { loginCustomer, registerCustomer } from "../controllers/auth";

const router = Router();

router.post("/register", registerCustomer).post("/login", loginCustomer);

export default router;
