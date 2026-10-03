const Cart = require("../model/cart");
const Product = require("../model/product");

// Add product to cart
const addToCart = async (req, res) => {
  try {
    const { productId, qty } = req.body;

    if (!productId || !qty || qty < 1) {
      return res.status(400).json({
        message: "Invalid product or quantity",
      });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    if (qty > product.stock) {
      return res.status(400).json({
        message: "Requested quantity is not available in stock",
      });
    }

    let cart = await Cart.findOne({
      user: req.user._id,
    });

    // If user does not have a cart
    if (!cart) {
      cart = new Cart({
        user: req.user._id,
        items: [
          {
            productId,
            qty,
          },
        ],
      });

      await cart.save();

      return res.status(201).json({
        message: "Product added to cart",
        cart,
      });
    }

    // Check if product already exists in cart
    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (existingItem) {
      const newQty = existingItem.qty + Number(qty);

      if (newQty > product.stock) {
        return res.status(400).json({
          message: "Requested quantity is not available in stock",
        });
      }

      existingItem.qty = newQty;
    } else {
      cart.items.push({
        productId,
        qty,
      });
    }

    await cart.save();

    res.status(200).json({
      message: "Product added to cart",
      cart,
    });
  } catch (error) {
    console.error("Add To Cart Error:", error);

    res.status(500).json({
      message: "Error adding product to cart",
      error: error.message,
    });
  }
};


// Get user's cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user._id,
    }).populate("items.productId", "name price imageUrl stock");

    if (!cart) {
      return res.status(200).json({
        user: req.user._id,
        items: [],
      });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error("Get Cart Error:", error);

    res.status(500).json({
      message: "Error fetching cart",
      error: error.message,
    });
  }
};


// Update product quantity
const updateCart = async (req, res) => {
  try {
    const { qty } = req.body;
    const { productId } = req.params;

    if (!qty || qty < 1) {
      return res.status(400).json({
        message: "Invalid quantity",
      });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    if (qty > product.stock) {
      return res.status(400).json({
        message: "Requested quantity is not available in stock",
      });
    }

    const cart = await Cart.findOne({
      user: req.user._id,
    });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    const item = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (!item) {
      return res.status(404).json({
        message: "Product not found in cart",
      });
    }

    item.qty = qty;

    await cart.save();

    res.status(200).json({
      message: "Cart updated successfully",
      cart,
    });
  } catch (error) {
    console.error("Update Cart Error:", error);

    res.status(500).json({
      message: "Error updating cart",
      error: error.message,
    });
  }
};


// Remove product from cart
const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;

    const cart = await Cart.findOne({
      user: req.user._id,
    });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    await cart.save();

    res.status(200).json({
      message: "Product removed from cart",
      cart,
    });
  } catch (error) {
    console.error("Remove From Cart Error:", error);

    res.status(500).json({
      message: "Error removing product from cart",
      error: error.message,
    });
  }
};


// Clear entire cart
const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user._id,
    });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    cart.items = [];

    await cart.save();

    res.status(200).json({
      message: "Cart cleared successfully",
      cart,
    });
  } catch (error) {
    console.error("Clear Cart Error:", error);

    res.status(500).json({
      message: "Error clearing cart",
      error: error.message,
    });
  }
};


module.exports = {
  addToCart,
  getCart,
  updateCart,
  removeFromCart,
  clearCart,
};