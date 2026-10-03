import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ShoppingBag, ArrowRight } from "lucide-react";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f5] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[75vh] max-w-2xl items-center justify-center">
        <div className="w-full rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-12">

          {/* SUCCESS ICON */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
            <CheckCircle2 className="h-11 w-11 text-emerald-500" />
          </div>

          {/* TITLE */}
          <h1 className="mt-7 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
            Order placed successfully!
          </h1>

          {/* MESSAGE */}
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
            Thank you for shopping with GenZVibe. Your payment was successful
            and your order has been placed.
          </p>

          {/* PAYMENT STATUS */}
          <div className="mx-auto mt-7 max-w-sm rounded-2xl bg-gray-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Payment Status
            </p>

            <p className="mt-1 text-sm font-bold text-emerald-600">
              Payment Successful
            </p>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

            <Link
              to="/"
              className="flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-bold text-white transition hover:bg-gray-800"
            >
              Continue Shopping
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/my-orders"
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-900 transition hover:bg-gray-50"
            >
              <ShoppingBag className="h-4 w-4" />
              View Orders
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;