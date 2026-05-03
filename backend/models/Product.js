import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true }, // Hot Coffee / Cold Coffee
  image: { type: String } // URL or image path
});

const Product = mongoose.model("Product", productSchema);
export default Product;