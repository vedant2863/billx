import { Router } from "express";
import {
  getCurrentUserProfile,
  logOut,
  updateUserPassword,
  updateUserProfile,
  userLogin,
  userRegister,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";
const userRouter = Router();

// POST /api/v1/users/register: Register a new user.
userRouter.post("/register" ,userRegister);

// POST /api/v1/users/login: Authenticate and login.
userRouter.post("/login", userLogin);

// POST /api/v1/users/logout: Logout the current user.
userRouter.post("/logout", logOut);

// GET /api/v1/users/me: Get the logged-in user's profile.
userRouter.get("/me", isAuthenticated, getCurrentUserProfile);

// PATCH /api/v1/users/update-profile: Update the logged-in user's profile
userRouter.patch("/update-profile", isAuthenticated, updateUserProfile);

//PATCH /api/v1/users/update-password: Update the logged-in user's password
userRouter.patch("/update-password", isAuthenticated,updateUserPassword);

export default userRouter;
