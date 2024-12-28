import { model, Schema } from "mongoose";

const localizationSchema = new Schema(
  {
    language: { type: String, required: true, default: "en" },
    dateTimeFormat: { type: String, default: "YYYY-MM-DD HH:mm:ss" },
    currencySymbol: { type: String, default: "$" },
    currencyCode: { type: String, default: "USD" },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }, // Include virtuals in the JSON output
    toObject: { virtuals: true }, // Include virtuals in the object output
  }
);

// Export Localization Model
export const Localization = model("Localization", localizationSchema);
