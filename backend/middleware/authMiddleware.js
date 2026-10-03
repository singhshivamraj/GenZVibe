// const jwt = require("jsonwebtoken");
// const User = require("../model/user");

// const protect = async (req, res, next) => {
//   let token;
//   if (
//     req.header.authorization &&
//     req.header.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.header.authorization.split(" ")[1];
//       const decode = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = await User.findById(decode.id).select("-password");
//       next();
//     } catch (error) {
//       res.status(401).json({ message: "not authorized, token failed" });
//     }
//   }
//   if(!token){
//     res.status(401).json({message: 'not authorized, no token'})
//   }
// };

// module.exports = {protect}



const jwt = require("jsonwebtoken");
const User = require("../model/user");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decode = jwt.verify(token, process.env.JwT_SECRET);

      req.user = await User.findById(decode.id).select("-password");

      if (!req.user) {
        return res.status(401).json({
          message: "User not found",
        });
      }

      return next();
    } catch (error) {
      return res.status(401).json({
        message: "not authorized, token failed",
      });
    }
  }

  return res.status(401).json({
    message: "not authorized, no token",
  });
};

module.exports = { protect };