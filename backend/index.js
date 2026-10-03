const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();


// CORS
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// API Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes.js"));
app.use("/api/orders", require("./routes/orderRoutes.js"));
app.use("/api/payment", require("./routes/paymentRoutes.js"));
app.use("/api/analytics", require("./routes/analyticsRoutes.js"));
app.use("/api/cart", require("./routes/cartRoutes.js"));


// Production frontend
if (process.env.NODE_ENV === "production") {

  app.use(
    express.static(
      path.join(__dirname, "../frontend/dist")
    )
  );

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(
        __dirname,
        "../frontend/dist/index.html"
      )
    );
  });

} else {

  app.get("/", (req, res) => {
    res.send("Genzvibe API is running in Development mode...");
  });

}


// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});