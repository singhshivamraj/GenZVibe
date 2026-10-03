// // const order = require('../model/order');
// const Order = require('../model/order');
// // const Order = require('../model/order')
// const sendEmail = require('../utils/sendEmail')

// // create nuw order


// const createOrder = async (req, res) =>{
//     try{
//     const {items, totalAmount, address, paymentId} = req.body;
//    if(!items || items.length === 0 || !totalAmount || !address){
//     return res.status(400).json({message: "invalid order data"});

//    }else{
//     const order = new Order({
//         user: req.user._id,
//         items,
//         totalAmount,
//         address,
//         paymentId
//     })
//     await order.save();
//       const message = `
//         <h2>Order Confirmation</h2>
//         <p>Hello ${req.user.name},</p>
//         <p>Your order has been successfully placed! Order ID: <strong>${createdOrder._id}</strong></p>
//         <p>Total Amount Paid: $${totalAmount.toFixed(2)}</p>
//         <p>It will be shipped to: ${address.street}, ${address.city}</p>
//         <p>Thank you for shopping with Shivam!</p>
//       `;
//     await sendEmail(req.user.email, 'order Created', message);
//     res.status(201).json({message: 'order created sucessfully', order})
//    }

// }catch(error){
//     res.status(500).json({message: 'error creating order', error})
// }
// };



// const getOrderById = async (req, res)=>{
//     try{
//         const order = await order.find({user: req.user._id}).populate('items.productId', 'name price');
//         res.json(order);
//     }catch(error){
//         res.status(500).json({message: 'error fetching orders', error})
//     }
// }


// const getOrder = async (req, res)=>{
//     try{
//         const orders = await Order.find({}).populate('userId', 'id name')
//         res.json(order);
//     }catch(error){
//         res.status(500).json({message: 'error fetching order', error})
//     }
// }


// const updateOrderStatus = async (req, res) =>{
//     try{
//         const { status} = req.body;
//         const order = await order.findById(req.params.id);
//         if(order){
//             order.status = status;
//             await order.save();
//             res.json({message: 'order status update', order});
//         }else{
//             res.status(404).json({message: 'order not found'});
//         }
//     }catch(error){
// res.status(500).json({message: 'error upadting order status', error});
//     }
    
// }



// module.exports = {
//     createOrder,
//     getOrder,
//     getOrderById,
//     updateOrderStatus
// }










const Order = require("../model/order");
const sendEmail = require("../utils/sendEmail");

// create new order
const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, address, paymentId } = req.body;

    if (!items || items.length === 0 || !totalAmount || !address) {
      return res.status(400).json({
        message: "invalid order data"
      });
    }

    const order = new Order({
      user: req.user._id,
      items,
      totalAmount,
      address,
      paymentId
    });

    const createdOrder = await order.save();

    const message = `
      <h2>Order Confirmation</h2>
      <p>Hello ${req.user.name},</p>
      <p>Your order has been successfully placed! Order ID: <strong>${createdOrder._id}</strong></p>
      <p>Total Amount Paid: $${totalAmount.toFixed(2)}</p>
      <p>It will be shipped to: ${address.street}, ${address.city}</p>
      <p>Thank you for shopping with Shivam!</p>
    `;

    await sendEmail(
      req.user.email,
      "Order Created",
      message
    );

    res.status(201).json({
      message: "order created successfully",
      order: createdOrder
    });

  } catch (error) {
    console.error("Create Order Error:", error);

    res.status(500).json({
      message: "error creating order",
      error: error.message
    });
  }
};


// get user's orders
const getOrderById = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id
    }).populate("items.productId", "name price");

    res.json(orders);

  } catch (error) {
    res.status(500).json({
      message: "error fetching orders",
      error: error.message
    });
  }
};


// get all orders - admin
const getOrder = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("user", "name email");

    res.json(orders);

  } catch (error) {
    res.status(500).json({
      message: "error fetching order",
      error: error.message
    });
  }
};


// update order status - admin
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findById(req.params.id);

    if (order) {
      order.status = status;

      await order.save();

      res.json({
        message: "order status updated",
        order
      });

    } else {
      res.status(404).json({
        message: "order not found"
      });
    }

  } catch (error) {
    res.status(500).json({
      message: "error updating order status",
      error: error.message
    });
  }
};


module.exports = {
  createOrder,
  getOrder,
  getOrderById,
  updateOrderStatus
};