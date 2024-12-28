import mongoose,{ Schema } from "mongoose";

// Constants for status and currencies
const INVOICE_STATUS = ["paid", "unpaid", "partially_paid"];
const CURRENCIES = ["USD", "EUR", "GBP", "INR", "AUD"]; // Add more currencies as needed

// Improved invoice schema
const invoiceSchema = new Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    dateIssued: { 
      type: Date, 
      required: true, 
      default: Date.now 
    },
    dueDate: { 
      type: Date, 
      required: true 
    },
    items: [
      {
        description: { type: String, required: true },
        quantity: { 
          type: Number, 
          required: true, 
          min: [1, 'Quantity must be at least 1'] 
        },
        price: { 
          type: Number, 
          required: true, 
          min: [0, 'Price cannot be negative'] 
        },
        total: { 
          type: Number, 
          required: true, 
          validate: {
            validator: function(value) {
              return value === this.quantity * this.price;
            },
            message: 'Item total must match quantity * price'
          }
        }
      }
    ],
    taxes: { 
      type: Number, 
      default: 0, 
      min: [0, 'Tax cannot be negative'] 
    },
    discounts: { 
      type: Number, 
      default: 0, 
      min: [0, 'Discount cannot be negative'] 
    },
    status: {
      type: String,
      enum: INVOICE_STATUS,
      default: "unpaid",
    },
    totalAmount: { 
      type: Number, 
      required: true, 
      min: [0, 'Total amount cannot be negative'] 
    },
    currency: {
      type: String,
      enum: CURRENCIES,
      default: "USD"
    },
    attachments: [String], // Links to attachments
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual field to calculate the totalAmount dynamically based on items
invoiceSchema.virtual('calculatedTotalAmount').get(function() {
  const itemsTotal = this.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  const taxAmount = (this.taxes / 100) * itemsTotal;
  const discountAmount = (this.discounts / 100) * itemsTotal;
  return itemsTotal + taxAmount - discountAmount;
});

// Pre-save hook to ensure totalAmount is always updated before saving
invoiceSchema.pre('save', function(next) {
  if (!this.totalAmount) {
    this.totalAmount = this.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  }
  next();
});

// Indexes to optimize queries based on commonly used fields
invoiceSchema.index({ client: 1, status: 1 });
invoiceSchema.index({ dueDate: 1 });

// Export the model
export const Invoice = mongoose.model('Invoice', invoiceSchema);

