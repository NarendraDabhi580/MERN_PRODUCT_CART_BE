import express from "express";
import {
  addToCart,
  getCart,
  removeCartItem,
  updateCartItem,
} from "../controllers/cartController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", authMiddleware, addToCart);
router.put("/update/:productId", authMiddleware, updateCartItem);
router.delete("/remove/:productId", authMiddleware, removeCartItem);
router.get("/", authMiddleware, getCart);

export default router;
