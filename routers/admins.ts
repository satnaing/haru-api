import Router from "express";
import {
  changePassword,
  createAdmin,
  deleteAdmin,
  getAdmin,
  getAdmins,
  getMe,
  loginAdmin,
  seedData,
  updateAdmin,
  updateAdminSelf,
} from "../controllers/admins";
import { authorize, adminOnly } from "../middlewares/authHandler";

const router = Router();

router
  .route("/")
  .get(adminOnly, authorize("SUPERADMIN"), getAdmins)
  .post(adminOnly, authorize("SUPERADMIN"), createAdmin)
  .put(adminOnly, updateAdminSelf);

router
  .get("/me", adminOnly, getMe)
  .post("/login", loginAdmin)
  .post("/seed", seedData)
  .put("/change-password", adminOnly, changePassword);

router
  .route("/:id")
  .get(adminOnly, authorize("SUPERADMIN"), getAdmin)
  .put(adminOnly, authorize("SUPERADMIN"), updateAdmin)
  .delete(adminOnly, authorize("SUPERADMIN"), deleteAdmin);

export default router;
