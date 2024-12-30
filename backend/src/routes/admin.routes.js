import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
} from "../controllers/admin.controller.js";
import { isAdmin } from "../middleware/auth.middleware.js";

const adminRouter = Router();

// GET /api/admin/all-users: Get all users
adminRouter.get("/all-users", isAdmin, getAllUsers);

// GET /api/v1/users/:id: Get details of a specific user
adminRouter.get("/:id", isAdmin, getUser);

// DELETE /api/v1/users/:id: Delete a user
adminRouter.delete("/:id", isAdmin, deleteUser);


export default adminRouter;
