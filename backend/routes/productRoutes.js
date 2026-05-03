import express from "express";
import Product from "../models/Product.js";

const router = express.Router();


// GET all products
router.get("/", async (req, res) => {
  try {
    const category = req.query.category;

    let filter = {};

    // category filter (case-insensitive)
    if (category) {
      filter.category = { $regex: category, $options: "i" };
    }

    // optional: remove empty images
    filter.image = { $ne: "" };

    const products = await Product.find(filter);

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
});

// POST add new product (Admin)

router.post("/", async (req, res) => {
  try {
    let result;

    if (Array.isArray(req.body)) {
      result = await Product.insertMany(req.body);
    } else {
      const product = new Product(req.body);
      result = await product.save();
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT update product (Admin)
router.put("/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
});

// DELETE product (Admin)
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting product", error: err });
  }
});

export default router;