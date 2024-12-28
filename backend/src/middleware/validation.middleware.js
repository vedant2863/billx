import { body, validationResult } from "express-validator";
import { AppError } from "../ utils/appError.js";

// Utility function to handle validation
export const validate = (validations) => {
  return async (req, res, next) => {
    // Run all validations
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);

    // If no validation errors, proceed to the next middleware
    if (errors.isEmpty()) {
      return next();
    }

    // Extract validation errors
    const extractedErrors = errors.array().map((err) => ({
      field: err.param,
      message: err.msg,
    }));

    // Throw a custom error with validation details
    throw new AppError("Validation failed", 400, extractedErrors);
  };
};

// Common validation chains
export const commonValidations = {
  email: body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Please provide a valid email address"),

  password: body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/)
    .withMessage(
      "Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character"
    ),

  name: body("name")
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("Name must be between 2 and 50 characters")
    .matches(/^[a-zA-Z\s]*$/)
    .withMessage("Name can only contain letters and spaces"),
};

// User validation chains

// User registration validation
export const validateSignup = validate([
  commonValidations.name,
  commonValidations.email,
  commonValidations.password,
]);

// User login validation
export const validateSignin = validate([
  commonValidations.email,
  body("password").notEmpty().withMessage("Password is required"),
]);

// User password change validation (for completeness)
export const validatePasswordChange = validate([
  body("currentPassword")
    .notEmpty()
    .withMessage("Current password is required"),
  body("newPassword")
    .notEmpty()
    .withMessage("New password is required")
    .custom((value, { req }) => {
      if (value === req.body.currentPassword) {
        throw new AppError(
          "New password must be different from current password",
          400
        );
      }
      return true;
    })
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/)
    .withMessage(
      "Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character"
    ),
]);
