import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";

import {
  ShoppingCart,
  Package,
  Users,
  IndianRupee,
  Plus,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  LayoutDashboard,
  Truck,
  UserRound,
  RefreshCw,
} from "lucide-react";

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/");
      return;
    }

    const fetchStats = async () => {
      try {
        const res = await fetch("/api/analytics", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setStats(data);
        } else {
          if (res.status === 401) {
            navigate("/login");
          }

          setStats({
            totalOrders: 0,
            totalProducts: 0,
            totalUsers: 0,
            totalRevenue: 0,
          });
        }
      } catch (error) {
        console.error("Analytics Error:", error);

        setStats({
          totalOrders: 0,
          totalProducts: 0,
          totalUsers: 0,
          totalRevenue: 0,
        });
      }
    };

    fetchStats();
  }, [user, navigate]);

  /* ================= STATS ================= */

  const statCards = [
    {
      title: "Total Orders",
      value: stats?.totalOrder ?? 0,
      icon: ShoppingCart,
      description: "Orders received",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
    {
      title: "Total Products",
      value: stats?.totalProduct ?? 0,
      icon: Package,
      description: "Products in store",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Total Users",
      value: stats?.totalUsers ?? 0,
      icon: Users,
      description: "Registered customers",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Total Revenue",
      value: `₹${Number(stats?.totalRevenue || 0).toFixed(2)}`,
      icon: IndianRupee,
      description: "Total earnings",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  /* ================= LOADING ================= */

  if (!stats) {
    return (
      <div className="min-h-[calc(100vh-64px)] bg-[#F8F7FC] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="animate-pulse">
            <div className="mb-3 h-4 w-28 rounded bg-gray-200" />
            <div className="mb-10 h-10 w-72 rounded-lg bg-gray-200" />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-40 rounded-2xl bg-white shadow-sm"
                />
              ))}
            </div>

            <div className="mt-8 h-64 rounded-3xl bg-white shadow-sm" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#F8F7FC]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F0B24] text-white shadow-sm">
                <LayoutDashboard className="h-5 w-5" />
              </div>

              <span className="text-sm font-bold uppercase tracking-wider text-[#6C47FF]">
                Admin Panel
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#0F0B24] sm:text-4xl">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-sm text-[#0F0B24]/55 sm:text-base">
              Welcome back,{" "}
              <span className="font-bold text-[#0F0B24]">
                {user?.name}
              </span>
              . Here's what's happening with your store.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full border border-[#0F0B24]/10 bg-white px-4 py-2.5 shadow-sm">
            <ShieldCheck className="h-5 w-5 text-[#6C47FF]" />

            <span className="text-sm font-bold text-[#0F0B24]">
              Administrator
            </span>

            <span className="h-2 w-2 rounded-full bg-green-500" />
          </div>
        </div>

        {/* ================= STAT CARDS ================= */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-2xl border border-[#0F0B24]/8 bg-white p-5 shadow-[0_8px_30px_-18px_rgba(15,11,36,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(15,11,36,0.35)]"
              >
                {/* Decorative circle */}

                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#F5F2FF] transition duration-300 group-hover:scale-125" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.iconBg}`}
                    >
                      <Icon
                        className={`h-5 w-5 ${card.iconColor}`}
                        strokeWidth={2}
                      />
                    </div>

                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>

                  <p className="mt-5 text-sm font-semibold text-[#0F0B24]/50">
                    {card.title}
                  </p>

                  <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-[#0F0B24]">
                    {card.value}
                  </h2>

                  <p className="mt-2 text-xs font-medium text-[#0F0B24]/40">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= ADMIN CONTROLS ================= */}

        <div className="mt-8 overflow-hidden rounded-3xl border border-[#0F0B24]/8 bg-white shadow-[0_10px_35px_-20px_rgba(15,11,36,0.35)]">

          {/* Section Header */}

          <div className="border-b border-[#0F0B24]/8 px-5 py-6 sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F2FF]">
                <ShieldCheck className="h-5 w-5 text-[#6C47FF]" />
              </div>

              <div>
                <h2 className="text-lg font-extrabold text-[#0F0B24]">
                  Administrative Controls
                </h2>

                <p className="text-sm text-[#0F0B24]/50">
                  Manage your store from one place.
                </p>
              </div>
            </div>
          </div>

          {/* Control Cards */}

          <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-4">

            {/* Add Product */}

            <button
              type="button"
              onClick={() => navigate("/admin/add-product")}
              className="group rounded-2xl bg-gradient-to-br from-[#FF4D2E] via-[#E0307A] to-[#6C47FF] p-5 text-left text-white shadow-[0_12px_30px_-15px_rgba(224,48,122,0.7)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-15px_rgba(224,48,122,0.8)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                  <Plus className="h-5 w-5" />
                </div>

                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </div>

              <h3 className="mt-6 text-lg font-extrabold">
                Add Product
              </h3>

              <p className="mt-1 text-sm text-white/70">
                Add a new product to your store.
              </p>
            </button>

            {/* Manage Products */}

            <button
              type="button"
              onClick={() => navigate("/admin/products")}
              className="group rounded-2xl border border-[#0F0B24]/8 bg-[#FAF9FF] p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-purple-200 hover:bg-purple-50"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100">
                  <Package className="h-5 w-5 text-purple-600" />
                </div>

                <ArrowRight className="h-5 w-5 text-[#0F0B24]/30 transition group-hover:translate-x-1 group-hover:text-purple-600" />
              </div>

              <h3 className="mt-6 text-lg font-extrabold text-[#0F0B24]">
                Manage Products
              </h3>

              <p className="mt-1 text-sm text-[#0F0B24]/50">
                Edit, update or remove products.
              </p>
            </button>

            {/* Manage Orders */}

            <button
              type="button"
              onClick={() => navigate("/admin/orders")}
              className="group rounded-2xl border border-[#0F0B24]/8 bg-[#FAF9FF] p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100">
                  <Truck className="h-5 w-5 text-orange-500" />
                </div>

                <ArrowRight className="h-5 w-5 text-[#0F0B24]/30 transition group-hover:translate-x-1 group-hover:text-orange-500" />
              </div>

              <h3 className="mt-6 text-lg font-extrabold text-[#0F0B24]">
                Manage Orders
              </h3>

              <p className="mt-1 text-sm text-[#0F0B24]/50">
                Track and update customer orders.
              </p>
            </button>

            {/* Users */}

            <button
              type="button"
              onClick={() => navigate("/admin/users")}
              className="group rounded-2xl border border-[#0F0B24]/8 bg-[#FAF9FF] p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                  <UserRound className="h-5 w-5 text-blue-600" />
                </div>

                <ArrowRight className="h-5 w-5 text-[#0F0B24]/30 transition group-hover:translate-x-1 group-hover:text-blue-600" />
              </div>

              <h3 className="mt-6 text-lg font-extrabold text-[#0F0B24]">
                Users Directory
              </h3>

              <p className="mt-1 text-sm text-[#0F0B24]/50">
                View and manage registered users.
              </p>
            </button>
          </div>
        </div>

        {/* ================= QUICK INFO ================= */}

        <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-[#0F0B24]/8 bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
              <ShieldCheck className="h-4 w-4 text-green-600" />
            </div>

            <div>
              <p className="text-sm font-bold text-[#0F0B24]">
                Admin access is active
              </p>

              <p className="text-xs text-[#0F0B24]/45">
                You have full access to administrative controls.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 rounded-full border border-[#0F0B24]/10 px-4 py-2 text-sm font-bold text-[#0F0B24]/70 transition hover:bg-[#F5F2FF] hover:text-[#6C47FF]"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;