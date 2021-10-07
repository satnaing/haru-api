import Router from "express";
import {
  changePassword,
  createAdmin,
  getMe,
  loginAdmin,
} from "../controllers/admins";
import { authorize, protectAdmin } from "../middlewares/authHandler";

const router = Router();

router
  .get("/me", protectAdmin, getMe)
  .post("/", protectAdmin, authorize("SUPERADMIN"), createAdmin)
  .post(
    "/change-password",
    protectAdmin,
    authorize("SUPERADMIN", "ADMIN", "MODERATOR"),
    changePassword
  );

router.post("/login", loginAdmin);

export default router;
