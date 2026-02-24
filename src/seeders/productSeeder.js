import mongoose from "mongoose";
import Product from "../models/Product.js";
import dotenv from "dotenv";

dotenv.config();

const products = [
  {
    name: "Mouse",
    price: "10",
    imageUrl:
      "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    stock: 50,
  },
  {
    name: "Keyboard",
    price: "50",
    imageUrl:
      "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    stock: 56,
  },
  {
    name: "Chair",
    price: "18",
    imageUrl:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fashion",
    stock: 100,
  },
  {
    name: "Flowers",
    price: "10",
    imageUrl:
      "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fashion",
    stock: 18,
  },
  {
    name: "Tshirt",
    price: "13",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fashion",
    stock: 342,
  },
  {
    name: "Shirt",
    price: "10",
    imageUrl:
      "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fashion",
    stock: 534,
  },
  {
    name: "Bag",
    price: "16",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fashion",
    stock: 503,
  },
  {
    name: "Chips",
    price: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1613919113640-25732ec5e61f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fashion",
    stock: 90,
  },
  {
    name: "Butter",
    price: "10",
    imageUrl:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fashion",
    stock: 87,
  },
  {
    name: "Panner",
    price: "10",
    imageUrl:
      "https://media.istockphoto.com/id/474476806/photo/panner-butter-masala-with-missi-roti.jpg?s=2048x2048&w=is&k=20&c=V_rqq7TuMqoxFIpF3vYGFr1sAgQW1adL4IhOZK8LuCo=",
    category: "Fashion",
    stock: 67,
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Products seeded successfuly");
    process.exit();
  } catch (error) {
    console.error("Product seeding failed");
    process.exit(1);
  }
};

seedProducts();
