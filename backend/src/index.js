import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./database/db.js";
import indexRouter from "./routes/index.routes.js";
import cookieParser from "cookie-parser";

//Load env variables
dotenv.config();

//connect to database
await connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Logging Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Body Parser Middleware
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(
  cookieParser()
)

//routes
app.use("/api", indexRouter);
// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

// Global Error Handler.
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    // Development error response
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  } else {
    // Production error response
    if (err.isOperational) {
      // Operational, trusted error: send message to client
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    } else {
      // Programming or other unknown error: don't leak error details
      console.error("ERROR 💥", err);
      res.status(500).json({
        status: "error",
        message: "Something went wrong!",
      });
    }
  }
});

// Start server
app.listen(PORT, () => {
  console.log(
    ` Server running on port ${PORT} in ${process.env.NODE_ENV} mode`
  );
});
