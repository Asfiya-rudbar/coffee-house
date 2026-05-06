
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      price: Number,
      qty: Number
    }
  ],
  totalAmount: Number,
  customerName: String,
  customerEmail: String,
  customerAddress: String,
  createdAt: { type: Date, default: Date.now }
});
