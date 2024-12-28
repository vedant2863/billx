import { AppError } from "../ utils/appError.js";
import { catchAsync } from "../ utils/catchAsync.js";
import { verifyToken } from "../ utils/token-utils.js";
import { User } from "../models/user.model.js";

export const isAuthenticated = catchAsync(async (req, res, next) => {
  // Check if the token exists in cookies
  const token = req.cookies.token;
  if (!token) {
    throw new AppError(
      "You are not logged in. Please log in to get access.",
      401
    );
  }

  try {
    // Verify and decode the token
    const decoded = verifyToken(token);

    // Attach user id to the request
    req.id = decoded.userId;

    // Fetch the user from the database
    const user = await User.findById(req.id);
    if (!user) {
      throw new AppError("User not found", 404);
    }

    // Attach the user to the request
    req.user = user;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      throw new AppError("Invalid token. Please log in again.", 401);
    }
    if (error.name === "TokenExpiredError") {
      throw new AppError("Your token has expired. Please log in again.", 401);
    }
    throw error;
  }
});

// Middleware to check if the user is an admin
export const isAdmin = catchAsync(async (req, res, next) => {
  // Check if the user is an admin
  if (!req.user?.role || req.user.role !== "admin") {
    throw new AppError("You do not have permission to access this route", 403);
  }

  // Proceed to the next middleware or route handler
  next();
});