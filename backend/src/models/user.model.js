import bcrypt from "bcryptjs";
import crypto from "crypto";
import { Schema, model } from "mongoose";

// User Schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxLength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please provide a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [8, "Password must be at least 8 characters"],
      select: false, // Password will not be returned in queries by default
    },
    role: {
      type: String,
      enum: {
        values: ["admin", "manager", "staff"],
        message: "Please select a valid role",
      },
      default: "staff",
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Pre-save hook to hash the password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  // Hash password using bcrypt
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare entered password with the hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate a password reset token and hash it
userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash reset token
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set expiration time for token
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // Token expires in 10 minutes
  return resetToken;
};

// Optional: Virtual for other use cases (for example, counting related documents, if applicable later)
userSchema.virtual("totalUsers").get(async function () {
  // If you ever need to count users
  const User = model("User");

  // Example to count all users in the database
  return await User.countDocuments();
});

// Create the User model
export const User = model("User", userSchema);
