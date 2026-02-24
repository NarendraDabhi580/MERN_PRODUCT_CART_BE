import Product from "../models/Product.js";

export const addProduct = async (req, res) => {
  try {
    const { name, price, imageUrl, category, stock } = req.body;

    if (!name || !price || !imageUrl || !category || stock === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = await Product.create({
      name,
      price,
      imageUrl,
      category,
      stock,
    });

    res.status(201).json({ message: "Product added successfuly", product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res
      .status(200)
      .json({ message: "Products fetched successfully", products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Products fetched successfully", product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Products updated successfully", product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Products deleted successfully", product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
