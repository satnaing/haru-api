import { Router } from "express";
import { registerCustomer } from "../controllers/auth";

const router = Router();

router.post("/register", registerCustomer).post("/login");

export default router;
