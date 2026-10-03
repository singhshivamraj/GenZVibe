import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";

import {
  MapPin,
  User,
  Home,
  Building2,
  Mail,
  ShieldCheck,
  LockKeyhole,
  CreditCard,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

const Checkout = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingPayment, setProcessingPayment] = useState(false);

  const [address, setAddress] = useState({
    fullName: "",
    street: "",
    city: "",
    postalCode: "",
    country: "",
  });

  // ==============================
  // FETCH BACKEND CART
  // ==============================

  const fetchCart = async () => {
    if (!user?.token) {
      setCartItems([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/cart", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch cart");
      }

      setCartItems(data.items || []);
    } catch (error) {
      console.error("Fetch Cart Error:", error);
      alert(error.message);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [user]);

  // ==============================
  // TOTAL PRICE
  // ==============================

  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc +
      Number(item.productId?.price || 0) * Number(item.qty || 0),
    0
  );

  // ==============================
  // PAYMENT
  // ==============================

  const handlePayment = async () => {
    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      navigate("/cart");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay is not loaded. Please refresh the page.");
      return;
    }

    try {
      setProcessingPayment(true);

      // ==============================
      // 1. CREATE RAZORPAY ORDER
      // ==============================

      const orderRes = await fetch("/api/payment/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: totalPrice,
        }),
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok) {
        throw new Error(
          orderData.message || "Failed to create Razorpay order"
        );
      }

      // ==============================
      // 2. RAZORPAY OPTIONS
      // ==============================

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: orderData.amount,

        currency: orderData.currency,

        name: "GenZVibe",

        description: "GenZVibe Test Payment",

        order_id: orderData.id,

        prefill: {
          name: address.fullName,
          email: user?.email || "",
        },

        theme: {
          color: "#111827",
        },

        // ==============================
        // 3. PAYMENT SUCCESS
        // ==============================

        handler: async function (response) {
          try {
            // ==============================
            // 4. VERIFY PAYMENT
            // ==============================

            const verifyRes = await fetch("/api/payment/verify", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(response),
            });

            const verifyData = await verifyRes.json();

            if (!verifyRes.ok) {
              throw new Error(
                verifyData.message || "Payment verification failed"
              );
            }

            // ==============================
            // 5. PREPARE ORDER ITEMS
            // ==============================

            const orderItems = cartItems.map((item) => ({
              productId: item.productId._id,
              qty: item.qty,
              price: Number(item.productId.price),
            }));

            // ==============================
            // 6. SAVE ORDER
            // ==============================

            const saveOrderRes = await fetch("/api/orders", {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
              },

              body: JSON.stringify({
                items: orderItems,
                totalAmount: totalPrice,
                address,
                paymentId: response.razorpay_payment_id,
              }),
            });

            const saveOrderData = await saveOrderRes.json();

            if (!saveOrderRes.ok) {
              throw new Error(
                saveOrderData.message || "Order saving failed"
              );
            }

            // ==============================
            // 7. CLEAR BACKEND CART
            // ==============================

            const clearCartRes = await fetch("/api/cart", {
              method: "DELETE",

              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            });

            const clearCartData = await clearCartRes.json();

            if (!clearCartRes.ok) {
              console.error(
                "Cart clear failed:",
                clearCartData
              );

              throw new Error(
                "Order placed, but cart could not be cleared"
              );
            }

            // ==============================
            // 8. CLEAR LOCAL STATE
            // ==============================

            setCartItems([]);

            // ==============================
            // 9. GO TO SUCCESS PAGE
            // ==============================

            navigate("/ordersuccess");
          } catch (error) {
            console.error(
              "Payment Verification / Order Error:",
              error
            );

            alert(error.message);
          } finally {
            setProcessingPayment(false);
          }
        },

        // ==============================
        // PAYMENT WINDOW CLOSED
        // ==============================

        modal: {
          ondismiss: function () {
            console.log("Razorpay payment window closed");
            setProcessingPayment(false);
          },
        },
      };

      // ==============================
      // 10. OPEN RAZORPAY
      // ==============================

      const razorpay = new window.Razorpay(options);

      // ==============================
      // 11. PAYMENT FAILED
      // ==============================

      razorpay.on("payment.failed", function (response) {
        console.error("Payment Failed:", response.error);

        setProcessingPayment(false);

        alert(
          response.error?.description ||
            "Payment failed. Please try again."
        );
      });

      razorpay.open();
    } catch (error) {
      console.error("Razorpay Error:", error);

      setProcessingPayment(false);

      alert(
        error.message || "Unable to start Razorpay payment"
      );
    }
  };

  // ==============================
  // FORM SUBMIT
  // ==============================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    handlePayment();
  };

  // ==============================
  // INPUT CLASS
  // ==============================

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 pl-11 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/5";

  // ==============================
  // LOADING
  // ==============================

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f7f7f5] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[70vh] max-w-6xl items-center justify-center">
          <p className="text-sm font-semibold text-gray-500">
            Loading checkout...
          </p>
        </div>
      </div>
    );
  }

  // ==============================
  // EMPTY CART
  // ==============================

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#f7f7f5] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[70vh] max-w-6xl items-center justify-center">
          <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100">
              <ShoppingBag className="h-7 w-7 text-gray-500" />
            </div>

            <h2 className="mt-5 text-2xl font-black text-gray-900">
              Your cart is empty
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Add some products to your cart before checking out.
            </p>

            <button
              onClick={() => navigate("/cart")}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-bold text-white transition hover:bg-gray-800"
            >
              Go to Cart
              <ArrowRight className="h-4 w-4" />
            </button>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f5] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
            GenZVibe Checkout
          </p>

          <h1 className="mt-2 text-4xl font-black tracking-[-0.04em] text-gray-900 sm:text-5xl">
            Complete your order.
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Enter your delivery details and proceed with secure payment.
          </p>
        </div>

        {/* ================= CHECKOUT LAYOUT ================= */}

        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">

          {/* ================= SHIPPING FORM ================= */}

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
          >

            {/* FORM HEADER */}

            <div className="flex items-center gap-4 border-b border-gray-100 pb-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100">
                <MapPin className="h-5 w-5 text-gray-700" />
              </div>

              <div>
                <h2 className="text-lg font-black text-gray-900">
                  Shipping Address
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                  Where should we deliver your order?
                </p>
              </div>

            </div>

            {/* INPUTS */}

            <div className="mt-7 space-y-5">

              {/* FULL NAME */}

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                  Full Name
                </label>

                <div className="relative">

                  <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    value={address.fullName}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        fullName: e.target.value,
                      })
                    }
                    className={inputClass}
                  />

                </div>
              </div>

              {/* STREET */}

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                  Street Address
                </label>

                <div className="relative">

                  <Home className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    placeholder="House no. / Street / Area"
                    required
                    value={address.street}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        street: e.target.value,
                      })
                    }
                    className={inputClass}
                  />

                </div>
              </div>

              {/* CITY + POSTAL */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                    City
                  </label>

                  <div className="relative">

                    <Building2 className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      placeholder="Your city"
                      required
                      value={address.city}
                      onChange={(e) =>
                        setAddress({
                          ...address,
                          city: e.target.value,
                        })
                      }
                      className={inputClass}
                    />

                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                    Postal Code
                  </label>

                  <div className="relative">

                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      placeholder="Postal code"
                      required
                      value={address.postalCode}
                      onChange={(e) =>
                        setAddress({
                          ...address,
                          postalCode: e.target.value,
                        })
                      }
                      className={inputClass}
                    />

                  </div>
                </div>

              </div>

              {/* COUNTRY */}

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                  Country
                </label>

                <div className="relative">

                  <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    placeholder="Country"
                    required
                    value={address.country}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        country: e.target.value,
                      })
                    }
                    className={inputClass}
                  />

                </div>
              </div>

            </div>

            {/* SECURITY INFO */}

            <div className="mt-7 flex items-start gap-3 rounded-2xl bg-gray-50 p-4">

              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

              <div>

                <p className="text-xs font-bold text-gray-900">
                  Your information is secure
                </p>

                <p className="mt-1 text-[11px] leading-5 text-gray-400">
                  Your shipping details are only used to process and deliver
                  your order.
                </p>

              </div>

            </div>

          </form>

          {/* ================= ORDER SUMMARY ================= */}

          <div className="lg:sticky lg:top-6 lg:h-fit">

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">

              {/* SUMMARY HEADER */}

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                    <ShoppingBag className="h-5 w-5 text-gray-700" />
                  </div>

                  <div>

                    <h2 className="text-lg font-black text-gray-900">
                      Order Summary
                    </h2>

                    <p className="text-xs text-gray-400">
                      {cartItems.length}{" "}
                      {cartItems.length === 1
                        ? "product"
                        : "products"}
                    </p>

                  </div>

                </div>

              </div>

              {/* PRODUCTS */}

              <div className="mt-6 space-y-4 border-y border-gray-100 py-5">

                {cartItems.map((item) => (

                  <div
                    key={item.productId._id}
                    className="flex items-center justify-between gap-3"
                  >

                    <div className="min-w-0">

                      <p className="line-clamp-1 text-sm font-semibold text-gray-800">
                        {item.productId.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        Qty: {item.qty}
                      </p>

                    </div>

                    <p className="shrink-0 text-sm font-bold text-gray-900">
                      ₹
                      {(
                        Number(item.productId.price || 0) *
                        Number(item.qty || 0)
                      ).toFixed(2)}
                    </p>

                  </div>

                ))}

              </div>

              {/* PRICE */}

              <div className="space-y-4 text-sm">

                <div className="flex justify-between text-gray-500">

                  <span>Subtotal</span>

                  <span className="font-semibold text-gray-900">
                    ₹{totalPrice.toFixed(2)}
                  </span>

                </div>

                <div className="flex justify-between text-gray-500">

                  <span>Shipping</span>

                  <span className="font-semibold text-emerald-600">
                    FREE
                  </span>

                </div>

                <div className="flex justify-between text-gray-500">

                  <span>Taxes</span>

                  <span className="text-xs text-gray-400">
                    At checkout
                  </span>

                </div>

              </div>

              <div className="my-6 h-px bg-gray-200" />

              {/* TOTAL */}

              <div className="flex items-end justify-between">

                <div>

                  <p className="text-xs font-medium text-gray-400">
                    Total to Pay
                  </p>

                  <p className="mt-1 text-3xl font-black tracking-tight text-gray-900">
                    ₹{totalPrice.toFixed(2)}
                  </p>

                </div>

              </div>

              {/* PAY BUTTON */}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={processingPayment}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 text-sm font-bold text-white transition-all duration-200 hover:bg-gray-800 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
              >

                <CreditCard className="h-4 w-4" />

                {processingPayment ? "Processing..." : "Pay Now"}

                {!processingPayment && (
                  <ArrowRight className="h-4 w-4" />
                )}

              </button>

              {/* TRUST */}

              <div className="mt-5 flex items-center justify-center gap-2 border-t border-gray-100 pt-5">

                <LockKeyhole className="h-4 w-4 text-gray-400" />

                <p className="text-[11px] text-gray-400">
                  Secure payment powered by Razorpay
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;