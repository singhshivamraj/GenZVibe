const Order = require("../model/order");

const User = require("../model/user");
const Product = require("../model/product");

const getAdminStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: "user" });
    const totalOrder = await Order.countDocuments({});
    const totalProduct = await Product.countDocuments({});
    const orders = await Order.find({});

    const totalRevenueData = orders.reduce(
      (acc, order) => acc + order.totalAmount,
      0,
    );
    res.json({
      totalUsers,
      totalOrder,
      totalProduct,
      totalRevenue: totalRevenueData,
    });
  } catch (error) {
    res.status(500).json({ message: "error fetching status", error });
  }
};

module.exports = { getAdminStats };
