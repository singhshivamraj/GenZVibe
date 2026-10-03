import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Return from "./pages/ReturnPolicy";
import Disclaimer from "./pages/Disclaimer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Order";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import AdminDashboard from "./admin/AdminDashboard";
import Addproduct from "./admin/Addproduct";
import AdminProducts from "./admin/AdminProducts";
import EditProduct from "./admin/EditProduct";
import AdminOrders from "./admin/AdminOrders";
import AdminUsers from "./admin/AdminUsers";
// import Addproduct from "./admin/Addproduct";
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/return" element={<Return />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ordersuccess"
              element={
                <ProtectedRoute>
                  <OrderSuccess />
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-orders"
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

             <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/add-product" element={<Addproduct />} />
           <Route path="/admin/products" element={<AdminProducts />} />
           <Route path="/admin/products" element={<AdminProducts />} />
           <Route path="/admin/edit-product/:id" element={<EditProduct />} />
            <Route path="/admin/orders" element={<AdminOrders/>} />
             <Route path="/admin/users" element={<AdminUsers />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
