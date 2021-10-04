import { Router } from "express";
import { getCustomers } from "../controllers/customers";

const router = Router();

router.get("/", getCustomers);

export default router;
