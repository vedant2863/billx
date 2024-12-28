import { AppError } from "../ utils/appError.js";
import { catchAsync } from "../ utils/catchAsync.js";
import { generateToken } from "../ utils/token-utils.js";
import { User } from "../models/user.model.js";

export const userRegister = catchAsync(async (req, res) => {
  const { name, email, password, role = "staff" } = req.body;
  if (!name || !email || !password)
    throw new AppError("Missing required fields", 400);

  //check if user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new AppError("User already exists", 400);

  //create user
  const user = new User({
    name,
    email,
    password,
    role,
  });
  await user.save();

  generateToken(res, user._id, "Account created successfully");

});

export const userLogin = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  // Find user and check password
  const user = await User.findOne({ email: email.toLowerCase() }).select(
    "+password"
  );
  if (!user || !(await user.comparePassword(password))) {
    throw new AppError("Invalid email or password", 401);
  }
  generateToken(res, user._id, `Welcome back ${user.name}`);
});

export const logOut = catchAsync(async (_, res) => {
  res.cookie("token", "", {
    maxAge: 0,
  });
  res.status(200).json({ success: true, message: "Logged out successfully" });
});

export const getCurrentUserProfile = catchAsync(async (req, res) => {
    // Use req.id instead of req.user._id since we are setting req.id in the isAuthenticated middleware
    const user = await User.findById(req.id); // Access the user via req.id
  
    if (!user) {
      throw new AppError("User not found", 404);
    }
  
    res.status(200).json({
      success: true,
      data: user, // Send the user data in the response
    });
  });

  export const updateUserProfile = catchAsync(async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email)
      throw new AppError("Missing required fields", 400);

    // Update the user's name, email
 const updateUserData=   await User.findByIdAndUpdate(req.id, { name, email: email?.toLowerCase() });

    res.status(200).json({
      success: true,
      message: "User profile updated successfully",
      data: updateUserData,
    });
  });