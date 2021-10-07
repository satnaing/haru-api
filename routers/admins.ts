import Router from "express";
import {
  changePassword,
  createAdmin,
  getMe,
  loginAdmin,
  updateAdminSelf,
} from "../controllers/admins";
import { authorize, protectAdmin } from "../middlewares/authHandler";

const router = Router();

router
  .post("/", protectAdmin, authorize("SUPERADMIN"), createAdmin)
  .put("/", protectAdmin, updateAdminSelf)
  .get("/me", protectAdmin, getMe)
  .post("/login", loginAdmin)
  .post("/change-password", protectAdmin, changePassword);

export default router;
