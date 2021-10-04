import { Router } from "express";
import {
  deleteCustomer,
  getCustomer,
  getCustomers,
} from "../controllers/customers";

const router = Router();

router.get("/", getCustomers);

router.get("/:id", getCustomer).delete("/:id", deleteCustomer);

export default router;
