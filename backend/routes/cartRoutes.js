const express = require("express");

const {
  addToCart,
  getCart,
  updateCart,
  removeFromCart,
  clearCart,
} = require("../controller/cartController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addToCart);

router.get("/", protect, getCart);

router.put("/:productId", protect, updateCart);

router.delete("/:productId", protect, removeFromCart);

router.delete("/", protect, clearCart);

module.exports = router;