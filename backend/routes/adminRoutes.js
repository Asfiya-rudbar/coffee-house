import express from "express";
import Product from "../models/Product.js";
import Order from "../models/Order.js";

const router = express.Router();

// GET all products
router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// POST add new product
router.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

// PUT update product
router.put("/products/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
});

// DELETE product
router.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

// GET all orders
router.get("/orders", async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

export default router;