import mongoose, { Schema } from "mongoose";

// Client Schema
const clientSchema = new Schema(
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
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true,
      trim: true,
      match: [/^\+?[0-9]{6,14}$/, "Please provide a valid phone number"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual property to count the number of invoices related to the client
clientSchema.virtual("totalInvoices").get(function () {
  // Assuming you have an Invoice model and each invoice has a `client` field referencing this client
  return this.model("Invoice").countDocuments({ client: this._id });
});

// Pre-save hook for phone number normalization (if necessary)
clientSchema.pre("save", function (next) {
  // Example: normalize phone number format (you can use a library like `libphonenumber` to format the phone number)
  if (this.phone) {
    this.phone = this.phone.replace(/\D/g, ""); // Strip non-numeric characters (optional)
  }
  next();
});

// Indexes for faster lookups
clientSchema.index({ email: 1 });
clientSchema.index({ phone: 1 });

// Method to check if a client has any invoices
clientSchema.methods.hasInvoices = async function () {
  const invoiceCount = await this.model("Invoice").countDocuments({
    client: this._id,
  });
  return invoiceCount > 0;
};

// Create the Client model
export const Client = mongoose.model("Client", clientSchema);
