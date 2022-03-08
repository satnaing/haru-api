import { Router } from "express";
import {
  createOrder,
  deleteOrder,
  getOrder,
  getOrderDetails,
  getOrders,
} from "../controllers/orders";
import { adminOnly } from "../middlewares/authHandler";

const router = Router();

router.route("/").get(adminOnly, getOrders).post(createOrder);

// TESTing only
router.route("/").patch(adminOnly, getOrderDetails);

router.route("/:id").get(adminOnly, getOrder).delete(adminOnly, deleteOrder);

export default router;
