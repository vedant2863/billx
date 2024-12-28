import { AppError } from "../ utils/appError.js";
import { catchAsync } from "../ utils/catchAsync.js";
import { User } from "../models/user.model.js";

export const getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();

  if (!users) {
    throw new AppError("No users found", 404);
  }

  res.status(200).json({
    success: true,
    data: users,
  });
});

export const getUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

export const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
});

