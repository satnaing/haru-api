import Router from "express";
import {
  changePassword,
  createAdmin,
  deleteAdmin,
  getAdmin,
  getAdmins,
  getMe,
  loginAdmin,
  updateAdmin,
  updateAdminSelf,
} from "../controllers/admins";
import { authorize, protectAdmin } from "../middlewares/authHandler";

const router = Router();

router
  .get("/", protectAdmin, authorize("SUPERADMIN"), getAdmins)
  .post("/", protectAdmin, authorize("SUPERADMIN"), createAdmin)
  .put("/", protectAdmin, updateAdminSelf)
  .get("/me", protectAdmin, getMe)
  .post("/login", loginAdmin)
  .post("/change-password", protectAdmin, changePassword);

router
  .get("/:id", protectAdmin, authorize("SUPERADMIN"), getAdmin)
  .put("/:id", protectAdmin, authorize("SUPERADMIN"), updateAdmin)
  .delete("/:id", protectAdmin, authorize("SUPERADMIN"), deleteAdmin);

export default router;
