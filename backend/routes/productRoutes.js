const express = require("express")

const {protect} = require("../middleware/authMiddleware")
const {admin} = require("../middleware/adminMiddleware")


const {getProduct, getProductById, createProduct, updateProduct, deleteProduct,} = require('../controller/productController')
const multer = require('multer');
const upload = multer({dest: 'uploads/'})
const router = express.Router();
// router.post('/register', registerUser);
// router.post("/login", loginUser);
// router.get("/users", protect, admin,  getUsers);

router.route('/').get(getProduct).post(protect, admin, upload.single('image'), createProduct);
router.route('/:id').get(getProductById).put(protect, admin, upload.single('image'), updateProduct).delete(protect, admin, deleteProduct)

    module.exports = router;
