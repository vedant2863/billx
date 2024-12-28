import mongoose, { model, Schema } from "mongoose";

// Payment Schema
const paymentSchema = new Schema(
  {
    invoice: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Invoice",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: [0, "Amount must be positive"],
    },
    paymentMethod: {
      type: String,
      enum: ["online", "bank_transfer", "manual"],
      required: true,
    },
    status: {
      type: String,
      enum: ["paid", "unpaid", "partially_paid"],
      default: "unpaid",
    },
    datePaid: { type: Date },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Export Payment Model
export const Payment = model("Payment", paymentSchema);
