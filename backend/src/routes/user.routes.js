import { Router } from "express";
import {
  getCurrentUserProfile,
  logOut,
  userLogin,
  userRegister,
} from "../controllers/user.controller.js";
import {
  validateSignin,
  validateSignup,
} from "../middleware/validation.middleware.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";
const userRouter = Router();

// POST /api/v1/users/register: Register a new user.
userRouter.post("/register",validateSignup ,userRegister);

// POST /api/v1/users/login: Authenticate and login.
userRouter.post("/login", validateSignin, userLogin);

// POST /api/v1/users/logout: Logout the current user.
userRouter.post("/logout", logOut);

// GET /api/v1/users/me: Get the logged-in user's profile.
userRouter.get("/me", isAuthenticated, getCurrentUserProfile);

export default userRouter;
