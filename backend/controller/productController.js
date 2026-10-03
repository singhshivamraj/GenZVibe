const Product = require("../model/product");
const cloudinary = require("../config/cloudinary");

// new product
const getProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

// product by id

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(400).json({ message: "product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

// createProduct

// const createProduct = async (req, res) => {
//   try {
//     const { name, description, price, category, stock } = req.body;

//     let imageUrl = "";

//     if (req.file) {
//       const result = await cloudinary.uploader.upload(req.file.path);
//       imageUrl = result.secure_url;
//     }

//     const product = new Product({
//       name,
//       description,
//       price,
//       category,
//       stock,
//       imageUrl,
//     });

//     const saveProduct = await product.save();
//     console.log("Product added successfully:", saveProduct);

//     res.status(201).json(saveProduct);
//   } catch (error) {
//     console.error("Create Product Error:", error);

//     res.status(500).json({
//       message: "server error",
//       error: error.message,
//     });
//   }
// };


const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      stock,
      imageUrl,
      ratings,
      numReviews
    } = req.body;

    let finalImageUrl = imageUrl || "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      finalImageUrl = result.secure_url;
    }

    const product = new Product({
      name,
      description,
      price,
      category,
      stock,
      imageUrl: finalImageUrl,
      ratings,
      numReviews
    });

    const saveProduct = await product.save();

    console.log("Product added successfully:", saveProduct);

    res.status(201).json(saveProduct);
  } catch (error) {
    console.error("Create Product Error:", error);

    res.status(500).json({
      message: "server error",
      error: error.message,
    });
  }
};
//update product

const updateProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;
    const product = await Product.findById(req.params.id);
    if (product) {
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.category = category || product.category;
      product.stock = stock || product.stock;
      if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log(result);
        product.imageUrl = result.secure_url;
      }
      const updateProduct = await product.save();
      res.json(updateProduct);
    } else {
      res.status(400).json({ message: "product not found" });
    }
  } catch (error) {
    // } catch (error) {
    //   res.status(500).json({ message: "server error" });
    // }
    console.error("Update Product Error:", error);

    res.status(500).json({
      message: "server error",
      error: error.message,
    });
  }
};

// delete product

const deleteProduct = async (req, res) => {
  try {
 const product = await Product.findById(req.params.id);
    if (product) {
      await product.deleteOne();
      res.json({ message: "product remove" });
    } else {
      res.status(404).json({ message: "product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "product not found" });
  }
};

module.exports = {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
