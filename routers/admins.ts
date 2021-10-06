import Router from "express";
import { createAdmin, loginAdmin } from "../controllers/admins";

const router = Router();

router.post("/", createAdmin);

router.post("/login", loginAdmin);

export default router;
