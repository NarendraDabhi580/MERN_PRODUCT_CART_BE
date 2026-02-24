import express from "express";
import { addProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/productContoller.js";

const router = express.Router();

router.post("/",addProduct);
router.get("/",getAllProducts);
router.get("/:id",getProductById);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);

export default router;