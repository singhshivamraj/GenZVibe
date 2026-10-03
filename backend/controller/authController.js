const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");
const genrateToken = (id) => {
  return jwt.sign({ id }, process.env.JwT_SECRET, { expiresIn: "30d" });
};
// registration user
// const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "user already exists" });
//     }
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     const user = User.create({ name, email, password: hashedPassword });
//     await newUser.save();
//     if (user) {
//       const otp = Math.floor(100000 + Math.random() * 900000).toString();
//       const message = ` wlcome to shoping app ${name} ! your otp for GenZVibe is: ${otp}`;
//       await sendEmail(
//         email,
//         `wlcome to shoping app your otp for registration is `,
//         message,
//       );
//       res
//         .status(201)
//         .json({
//           _id: user._id,
//           name: user.name,
//           email: user.email,
//           role: user.role,
//           token: genrateToken(user._id),
//         });
//     } else {
//       res.status(400).json({ message: `invalid user data` });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "server error" });
//   }
// };


// Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user in database
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    // Generate OTP
    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const message = `Welcome ${name}! Your OTP is: ${otp}`;

    // Send email
    await sendEmail(
      email,
      "Welcome to GenZVibe - Registration OTP",
      message
    );

    // Send response
    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: genrateToken(user._id)
    });

  } catch (error) {
    console.error("Register Error:", error);

    return res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// login user
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (user && (await bcrypt.compare(password, user.password))) {
//       res.json({
//         _id: user._id,
//         name: user.name,
//         email: user.role,
//         token: genrateToken(user._id),
//       });
//     } else {
//       res.status(400).json({ message: "invalid email or password" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "server error" });
//   }
// };



// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: genrateToken(user._id),
      });
    } else {
      return res.status(400).json({
        message: "invalid email or password",
      });
    }
  } catch (error) {
    console.error("Login Error:", error);

    return res.status(500).json({
      message: "server error",
    });
  }
};


//admin feature  
const getUsers = async (req, res) =>{
try{
   const users = await User.find({}).select("-password");
    res.json(users);

}catch(error){
res.status(500).json({message: `server error`})
}
};
module.exports ={
    registerUser,
    loginUser,
    getUsers
}
