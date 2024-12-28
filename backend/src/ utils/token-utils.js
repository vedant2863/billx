import jwt from "jsonwebtoken";
import { AppError } from "./appError.js";

export const generateToken = (res, user, message) => {
  // Ensure that JWT_SECRET is set in the environment
  if (!process.env.JWT_SECRET) {
    throw new AppError('JWT_SECRET is not defined in the environment', 500);
  }

  // Generate the JWT token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d", // Token expiration time
  });

  // Send the token in a cookie and return the response
  return res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    })
    .json({
      success: true,
      message,
      user, // Returning the user object along with the message
    });
};

// Function to verify the token
export const verifyToken = (token) => {
  // Ensure the JWT_SECRET is defined in the environment
  if (!process.env.JWT_SECRET) {
    throw new AppError('JWT_SECRET is not defined in the environment', 500);
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded; 
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      throw new AppError("Invalid token. Please log in again.", 401);
    }
    if (error.name === "TokenExpiredError") {
      throw new AppError("Your token has expired. Please log in again.", 401);
    }
    throw error; // Rethrow if any other error occurs
  }
};

// Function to decode the token (without verification)
export const decodeToken = (token) => {
  try {
    // Decode the token to extract its payload
    const decoded = jwt.decode(token);
    return decoded; // Return the decoded payload (userId, etc.)
  } catch (error) {
    throw new AppError("Failed to decode token", 400);
  }
};