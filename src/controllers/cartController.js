import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
      return res
        .status(400)
        .json({ message: "productId and quantity required" });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart = await Cart.findOne({ user: req.user });

    if (!cart) {
      cart = await Cart.create({
        user: req.user,
        items: [{ product: productId, quantity }],
      });
    } else {
      const itemIndex = cart.items.findIndex(
        (item) => item.product.toString() === productId,
      );

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity });
      }
      await cart.save();
    }
    res.status(201).json({ message: "Cart item added successfuly", cart });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add cart", error: error.message });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;
    const { productId } = req.params;

    if (!quantity || quantity < 1) {
      return res.status(400).json({ message: "Invalid quantity" });
    }

    const cart = await Cart.findOne({ user: req.user });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.items.find(
      (item) => item.product.toString() === productId,
    );
    if (!item) {
      return res
        .status(404)
        .json({ message: "Product not found in cart items" });
    }

    item.quantity = quantity;
    await cart.save();

    res.status(201).json({ message: "Cart updated successfuly" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update cart", error: error.message });
  }
};

export const removeCartItem = async (req, res) => {
  try {
    const { productId } = req.params;

    const cart = await Cart.findOne({ user: req.user });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId,
    );

    await cart.save();
    res.status(201).json({ message: "Cart removed successfuly" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete cart", error: error.message });
  }
};

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user }).populate(
      "items.product",
    );
    if (!cart) {
      return res.json({ cart: { items: [] } });
    }

    res.status(200).json({ message: "Cart fetched successfuly", cart });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch cart", error: error.message });
  }
};

export const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user });
    if (cart) {
      cart.items = [];
      await cart.save();
    }
    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to clear cart", error: error.message });
  }
};
