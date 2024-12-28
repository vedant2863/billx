import { model, Schema } from "mongoose";

// Report Schema
const reportSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["payment", "outstanding_invoice", "tax"],
      required: true,
    },
    content: { type: Schema.Types.Mixed, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const Report = model("Report", reportSchema);
