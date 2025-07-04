const express = require("express");
const validateProduct = require("../utils/validateproduct");
const {
  createProduct,
  getallProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productcontroller");

const productRoutes = express.Router();

productRoutes.post("/", validateProduct, createProduct);
productRoutes.get("/", getallProduct);
productRoutes.get("/:id", getProductById);
productRoutes.put("/:id", validateProduct, updateProduct);
productRoutes.delete("/:id", deleteProduct);

module.exports = productRoutes;
