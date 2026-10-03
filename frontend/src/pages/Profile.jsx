
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  LogOut,
  Mail,
  Package,
  ShieldCheck,
  ShoppingBag,
  User,
} from "lucide-react";

import { AuthContext } from "../context/Authcontext";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) {
    return null;
  }

  const firstLetter = user.name
    ? user.name.charAt(0).toUpperCase()
    : "U";

  return (
    <div className="min-h-screen bg-[#f7f7f5] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* BACK BUTTON */}
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Continue Shopping
        </Link>

        {/* PROFILE CARD */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

          {/* PROFILE HEADER */}
          <div className="bg-black px-6 py-10 sm:px-10">
            <div className="flex flex-col items-center gap-5 sm:flex-row">

              {/* AVATAR */}
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white text-4xl font-black text-gray-900 shadow-lg">
                {firstLetter}
              </div>

              {/* USER INFO */}
              <div className="text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
                  GenZVibe
                </p>

                <h1 className="mt-1 text-3xl font-black text-white sm:text-4xl">
                  {user.name || "User"}
                </h1>

                <p className="mt-1 text-sm text-gray-400">
                  {user.email || "Email not available"}
                </p>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-6 sm:p-10">

            {/* ACCOUNT INFORMATION */}
            <div>
              <h2 className="text-xl font-black text-gray-900">
                Account Information
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Your personal account details.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              {/* NAME */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                    <User className="h-5 w-5 text-gray-600" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Name
                    </p>

                    <p className="mt-1 text-sm font-bold text-gray-900">
                      {user.name || "Not available"}
                    </p>
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                    <Mail className="h-5 w-5 text-gray-600" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Email
                    </p>

                    <p className="mt-1 truncate text-sm font-bold text-gray-900">
                      {user.email || "Not available"}
                    </p>
                  </div>
                </div>
              </div>

              {/* ACCOUNT TYPE */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                    <ShieldCheck className="h-5 w-5 text-gray-600" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Account Type
                    </p>

                    <p className="mt-1 text-sm font-bold capitalize text-gray-900">
                      {user.role || "User"}
                    </p>
                  </div>
                </div>
              </div>

              {/* ACCOUNT STATUS */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                    <ShieldCheck className="h-5 w-5 text-emerald-600" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Account Status
                    </p>

                    <p className="mt-1 text-sm font-bold text-emerald-600">
                      Active
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* QUICK ACTIONS */}
            <div className="mt-10">
              <h2 className="text-xl font-black text-gray-900">
                Quick Actions
              </h2>

              <div className="mt-5 space-y-3">

                {/* MY ORDERS */}
                <Link
                  to="/my-orders"
                  className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-gray-300 hover:shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100">
                      <Package className="h-5 w-5 text-gray-700" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        My Orders
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        View and track your orders
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Link>

                {/* MY CART */}
                <Link
                  to="/cart"
                  className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-gray-300 hover:shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100">
                      <ShoppingBag className="h-5 w-5 text-gray-700" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        My Cart
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        View products in your cart
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Link>
              </div>
            </div>

            {/* LOGOUT */}
            <div className="mt-8 border-t border-gray-100 pt-8">
              <button
                onClick={handleLogout}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 px-5 py-3.5 text-sm font-bold text-red-600 transition hover:bg-red-100"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <p className="mt-6 text-center text-xs text-gray-400">
          GenZVibe — Shop your way.
        </p>
      </div>
    </div>
  );
};

export default Profile;

