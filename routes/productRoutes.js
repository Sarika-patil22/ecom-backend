const express = require("express");
const validateProduct = require("../utils/validateproduct");
const {
  createProduct,
  getallProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productcontroller");
const { isAdmin, isAuth } = require("../middlewares/authMiddlewares");

const productRoutes = express.Router();

productRoutes.post("/", isAuth, isAdmin, validateProduct, createProduct);
productRoutes.get("/", isAuth, getallProduct);
productRoutes.get("/:id", isAuth, getProductById);
productRoutes.put("/:id", isAuth, isAdmin, validateProduct, updateProduct);
productRoutes.delete("/:id", isAuth, isAdmin, deleteProduct);

module.exports = productRoutes;
