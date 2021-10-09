import { Router } from "express";
import {
  deleteCustomer,
  getCustomer,
  getCustomers,
} from "../controllers/customers";
import { adminOnly } from "../middlewares/authHandler";

const router = Router();

router.get("/", adminOnly, getCustomers);

router
  .get("/:id", adminOnly, getCustomer)
  .delete("/:id", adminOnly, deleteCustomer);

export default router;
