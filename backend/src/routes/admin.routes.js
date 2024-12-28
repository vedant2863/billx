import { Router } from "express";
import { deleteUser, getAllUsers, getUser } from "../controllers/admin.controller.js";

const adminRouter = Router();

// GET /api/admin/all-users: Get all users
adminRouter.get("/all-users", getAllUsers);

// GET /api/v1/users/:id: Get details of a specific user
adminRouter.get("/:id", getUser);

// DELETE /api/v1/users/:id: Delete a user
adminRouter.delete("/:id", deleteUser);

export default adminRouter;