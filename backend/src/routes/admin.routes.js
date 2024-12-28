import { Router } from "express";
import { getAllUsers, getUser } from "../controllers/admin.controller.js";

const adminRouter = Router();

// GET /api/admin/all-users: Get all users
adminRouter.get("/all-users", getAllUsers);

// GET /api/v1/users/:id: Get details of a specific user
adminRouter.get("/:id", getUser);

export default adminRouter;