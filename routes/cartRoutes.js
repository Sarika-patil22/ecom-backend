const express = require("express");
const { isAuth } = require("../middlewares/authMiddlewares");
const {
  addToCart,
  updateQuantity,
  removeProduct,
  clearCart,
  getCart,
} = require("../controllers/cartController");

const cartRoutes = express.Router();

cartRoutes.get("/", isAuth, getCart);

cartRoutes.post("/add", isAuth, addToCart);

cartRoutes.put("/", isAuth, updateQuantity);

cartRoutes.delete("/product", isAuth, removeProduct);

cartRoutes.delete("/", isAuth, clearCart);

module.exports = cartRoutes;
